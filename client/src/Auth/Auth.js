import history from '../history.js';
import auth0 from 'auth0-js';
import { AUTH_CONFIG } from './auth0-variables';

let redirectUri = ''

export default class Auth {
  env = 'PROD'
  constructor() {
    //this.checkEnv();

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.getAccessToken = this.getAccessToken.bind(this);
    this.getProfile = this.getProfile.bind(this);
    this.renewSession = this.renewSession.bind(this);
    this.checkCurrentSession = this.checkCurrentSession.bind(this)
    this.getPrevLocation();
  }

  // auth0 = new auth0.WebAuth({
  //   domain: AUTH_CONFIG.domain,
  //   clientID: AUTH_CONFIG.clientId,
  //   redirectUri: redirectUri,
  //   audience: `https://${AUTH_CONFIG.domain}/userinfo`,
  //   responseType: 'token id_token',
  //   scope: 'openid profile email' //*Need to include 'email' to get user email address!
  // });

  auth0 = this.checkEnv();

  // This whole function has to be run to set up separate dev and prod callback urls
  checkEnv(){
    let env = 'PROD'
    if (window.location.href.indexOf('localhost') > -1){
      env = 'DEV'
    }

    if (env === 'PROD'){
      redirectUri = AUTH_CONFIG.callbackUrlPROD
    } else {
      redirectUri = AUTH_CONFIG.callbackUrlDEV
    }

    let newAuth0 = new auth0.WebAuth({
      domain: AUTH_CONFIG.domain,
      clientID: AUTH_CONFIG.clientId,
      redirectUri: redirectUri,
      audience: `https://${AUTH_CONFIG.domain}/userinfo`,
      responseType: 'token id_token',
      scope: 'openid profile email' //*Need to include 'email' to get user email address!
    });

    // console.log(env, redirectUri)
    // console.log(newAuth0)

    return newAuth0
  }

  login() {
    this.auth0.authorize();
  }

  // Custom test to handle reauthorization within the app
  relogin(packet, func) {
    this.auth0.login(packet, (res)=>func(res))
  }

  getPrevLocation(){
    let prevLoc = localStorage.getItem('sr_track_prevLoc');
    // console.log(prevLoc);
    return prevLoc
  }

  handleAuthentication() {
    console.log('handle auth is being called')
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        //history.replace(this.getPrevLocation());
        history.replace('/home');
      } else if (err) {
        history.replace('/home');
        console.log(err);
        alert(`Error: ${err.error}. Check the console for further details.`);
      }
    });
  }

  renewSession(){
    console.log('renew session is being called')
    this.auth0.checkSession({},(err,authResult)=>{
      console.log(authResult)
      if (authResult && authResult.accessToken && authResult.idToken) {
        console.log('Successful renewal!')
        this.setSession(authResult);
      } else if (err) {
        this.logout();
        console.log(err);
        alert(`Could not get a new token (${err.error}: ${err.error_description}).`);
      }
    })

  }

  setSession(authResult) {
    // Set the time that the access token will expire at
    // Default value is 7200 milliseconds - 7.2 seconds - multiply by 1000 to get 2 hours
    console.log('setting session')
    let expiresAt = JSON.stringify((authResult.expiresIn*1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    //this.checkSessInterval;

    console.log(this.getPrevLocation())
    // navigate to the home route
    history.replace(`${this.getPrevLocation()}`);
  }


  // Moved this function into the navbar since the navbar will be present on every page
  checkCurrentSession(renewFunc){
    //console.log(renewFunc)
    let timeLeft = parseInt(localStorage.getItem('expires_at'), 10) - new Date().getTime();
    if(timeLeft <= 0 || isNaN(timeLeft)){
      console.log('Should logout')
      //this.logout();
    } else if (timeLeft <= 60000){
      console.log('expiring soon!', timeLeft)
      // console.log('triggering renew function')
      return true;
    } else {
      return false
    }
    console.log(timeLeft)
  }

  //checkSessInterval = setInterval(()=>{this.checkCurrentSession(this.renewSession)}, 3000) // Checks session status every 2 minutes

  getAccessToken() {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      throw new Error('No access token found');
    }
    return accessToken;
  }

  getProfile(cb) {
    let accessToken = this.getAccessToken();
    this.auth0.client.userInfo(accessToken, (err, profile) => {
      if (profile) {
        this.userProfile = profile;
      }
      cb(err, profile);
    });
  }

  logout() {
    // Clear access token and ID token from local storage
    clearInterval(this.checkSessInterval)
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    this.userProfile = null;
    // navigate to the home route
    history.replace('/home');
  }

  isAuthenticated() {
    // Check whether the current time is past the 
    // access token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));

    return new Date().getTime() < expiresAt;
  }
}

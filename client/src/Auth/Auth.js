import history from '../history.js';
import auth0 from 'auth0-js';
import { AUTH_CONFIG } from './auth0-variables';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: AUTH_CONFIG.domain,
    clientID: AUTH_CONFIG.clientId,
    redirectUri: AUTH_CONFIG.callbackUrl,
    audience: `https://${AUTH_CONFIG.domain}/userinfo`,
    responseType: 'token id_token',
    scope: 'openid profile email' //*Need to include 'email' to get user email address!
  });

  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.getAccessToken = this.getAccessToken.bind(this);
    this.getProfile = this.getProfile.bind(this);
    this.renewSession = this.renewSession.bind(this);
    this.getPrevLocation();
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
    console.log(prevLoc);
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
    // Default value is 72 milliseconds - multiply by 1000 to get 2 hours
    console.log('setting session')
    let expiresAt = JSON.stringify((authResult.expiresIn*1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    // navigate to the home route
    history.replace('/home');
  }

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

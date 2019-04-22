import React, {Component} from 'react';
import {Container} from '../components/Grid';
import SessionRenewalModal from '../components/Modal/SessionRenewal'


class SessionChecker extends Component{
  constructor(props){
    super(props);
    this.handleClose = this.handleClose.bind(this)
    this.handleShow = this.handleShow.bind(this)
    this.checkCurrentSession = this.checkCurrentSession.bind(this)
    this.renewSession.bind(this)
    this.login = this.login.bind(this)

    this.state = {
      show:false,
      secLeft: 0,
    }
  }

  midIntActive = false
  slowTime = 600000;
  midTime = 60000;
  quickTime = 1000;

  componentDidMount(){
    //console.log(this.props);
    // console.log(localStorage.getItem('expires_at'))

    // Checks if user has been logged in before setting an interval
    // to check the lifespan of the toekn
    setTimeout(()=>{
      if(localStorage.getItem('expires_at')){
        this.sessCheck = setInterval(
          ()=>{this.checkCurrentSession()}, this.slowTime
        )
      }
    },1000)
  }

  componentWillUnmount(){
    console.log('Clearing interval')
    clearInterval(this.sessCheck)
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true }, ()=> {
      this.sessCheck = setInterval(
        ()=>{this.checkCurrentSession()}, this.quickTime
      )
    });
  }

  getPrevLocation(){
    let prevLoc = localStorage.getItem('sr_track_prevLoc');
    console.log(prevLoc);
    //return prevLoc
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    clearInterval(this.sessCheck);
    this.midIntActive = false
    this.handleClose();
    this.props.auth.logout();
  }

  renewSession(){
    this.handleClose();
    this.midIntActive = false
    clearInterval(this.sessCheck)
    this.sessCheck = setInterval(
      ()=>{this.checkCurrentSession()}, this.slowTime
    )
    this.props.auth.renewSession();
  }

  checkCurrentSession() {
    //console.log('Checking session!')
    // console.log(this)
    //console.log(this.props.auth.checkCurrentSession());
    let timeLeft = parseInt(localStorage.getItem('expires_at'), 10) - new Date().getTime();
    let minLeft = (timeLeft/1000/60).toFixed(2)
    let secLeft = (timeLeft/1000).toFixed(0)
    // The first option handles erroneous logouts 
    if (isNaN(timeLeft)){
      console.log('Not logged in')
      clearInterval(this.sessCheck)
      this.handleClose();
    }
    // If the user has forgotten to lougout and left their browser open, this option logs them out
    else if(timeLeft <= 0){
      console.log('Should logout')
      this.logout();
    } 
    // If time is less than 15 minutes, the interval should switch from 10 min to one min
    // and the midIntActive flag should flip from false to true
    else if (timeLeft <= 900000 && !this.midIntActive){
      console.log('Less than 15 minutes left; switching from a 10 min to 1 minute interval check')
      clearInterval(this.sessCheck);
      this.sessCheck = setInterval(
        ()=>{this.checkCurrentSession()}, this.midTime
      )
    } 
    // If the time left is less than 2 minutes, the interval drops from 1 min to 1 second,
    // and the renewSession modal is activated
    else if (timeLeft <= 120000){
      console.log(`Expiring soon! Expiring in ${secLeft} seconds.`)
      if(!this.state.show){clearInterval(this.sessCheck); this.handleShow();}
      this.setState({secLeft: secLeft})
    } else {
      console.log(`There are ${minLeft} minutes left before token expiration; this check will occur again in either 10 minutes or 1 minute `)
    
    }
    // console.log(timeLeft)

  }

  setSessionCheck() {
    this.setState({
      intervalCheck: setInterval(
        () => { 
          this.setState({
            nearTimeout: this.checkCurrentSession(this.state)
          }, ()=>{console.log(this.state.nearTimeout)}) 
        }, 3000
      )
    })

  }

  render (){

    return(
      <Container fluid>
        <button onClick={this.checkCurrentSession}>Test session validity</button>
        <SessionRenewalModal 
          show={this.state.show}
          logout={this.logout.bind(this)}
          renew={this.renewSession.bind(this)}
          onClick={this.handleClose}
          time={this.state.secLeft}
        />
      </Container>
    )
  }

}

export default SessionChecker;
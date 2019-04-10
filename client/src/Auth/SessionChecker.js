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

  slowTime = 3000;
  quickTime = 1000;

  componentDidMount(){
    console.log(this.props);
    console.log(localStorage.getItem('expires_at'))

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
    clearInterval(this.sessCheck)
    this.handleClose();
    this.props.auth.logout();
  }

  renewSession(){
    this.handleClose();
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
    if (isNaN(timeLeft)){
      console.log('Not logged in')
      clearInterval(this.sessCheck)
      this.handleClose();
    }else if(timeLeft <= 0){
      console.log('Should logout')
      this.logout();
    } else if (timeLeft <= 120000){
      console.log(`Expiring soon! Expiring in ${secLeft} seconds.`)
      if(!this.state.show){clearInterval(this.sessCheck); this.handleShow();}
      this.setState({secLeft: secLeft})
     
    } else {
      console.log(`There are ${minLeft} minutes left before token expiration `)
    
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
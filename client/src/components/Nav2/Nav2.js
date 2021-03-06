import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import API from "../../utils/API";
//import Callback from '../../Callback/Callback.js';
import history from '../../history.js';
import SessionChecker from '../../Auth/SessionChecker';
import { Col, Container, Row } from "../Grid"



// const auth = new Auth();
// auth.login();

//const history = require('history')

//const auth = new Auth();


class Nav2 extends Component {
  state = {
    profile: {},
    intervalCheck: () => { },
    nearTimeout: false
  }

  // constructor(props) {
  //   super(props);
  //   //this.getPrevLocation();
  //   //this.checkCurrentSession = this.checkCurrentSession.bind(this)
  // }

  componentDidMount() {
    this.setCurrentLocation();
    this.loadProfile();
    // this.setSessionCheck();
  }

  goTo(route, state) {
    //this.props.history.replace(`/${route}`)
    history.replace(`/${route}`, state)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }
  // getPrevLocation(){
  //   let prevLoc = localStorage.getItem('sr_track_prevLoc');
  //   console.log(prevLoc);
  // }

  setCurrentLocation() {
    // set current location in local storage to handle 
    // login reoruting
    let curLoc = history.location.pathname;
    // set the current page as the previous location (so that 
    // the next page navigation can refer to the *current page
    // as the previous one)
    localStorage.setItem('sr_track_prevLoc', curLoc);
    // console.log(curLoc)
  }

  getUser(email) {
    API.getUser(email).then(
      res => {
        //console.log(res.data)
        if (res.data.length === 0) {
          console.log("No user found; should route to createProfile page...")
          this.goTo('createProfile', this.state.profile)
        } else {
          console.log('user found! loading their profile into the state')
          // Loads the user profile into the state, then console.logs it to check (not needed for dev)
          // this.setState({ profile: res.data[0] }, () => console.log(this.state.profile))
          this.setState({ profile: res.data[0] })
        }
      }
    )
  }

  loadProfile() {
    const { userProfile, getProfile, isAuthenticated } = this.props.auth;
    if (isAuthenticated()) {
      if (!userProfile) {
        // console.log('need to load Auth0 profile')
        getProfile((err, profile) => {
          this.setState({ profile: profile }, () => {
            this.getUser(this.state.profile.email)
          });
          //console.log('user profile: ' + JSON.stringify(this.state.profile, 2, null));
        });
      } else {
        console.log('Auth0 profile loaded')
        this.setState({ profile: userProfile }, () => {
          this.getUser(this.state.profile.email)
        });
      }
    }
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    const profile = this.state.profile

    return (
      <Container fluid>
        <SessionChecker auth={this.props.auth} />
        <Navbar fluid>
          <Row>
            <Col size="md-4">
              <Navbar.Header>
                <Navbar.Brand>
                  {/* <a href="#">Auth0 - React</a> */}
                  <span>Auth0-React</span>
                </Navbar.Brand>
                <Button
                  bsStyle="primary"
                  className="btn-margin"
                  onClick={this.goTo.bind(this, 'home', {})}
                >
                  Home
            </Button>
                {
                  isAuthenticated() && (
                    <Button
                      bsStyle="primary"
                      className="btn-margin"
                      onClick={this.goTo.bind(this, 'profile', {})}
                    >
                      Profile
                  </Button>
                  )
                }
                {
                  isAuthenticated() && (
                    <Button
                      bsStyle="primary"
                      className="btn-margin"
                      onClick={this.goTo.bind(this, 'createProfile', profile)}
                    >
                      Create Profile
                  </Button>
                  )
                }
                {
                  isAuthenticated() && (
                    <Button
                      id="qsLogoutBtn"
                      bsStyle="primary"
                      className="btn-margin"
                      onClick={this.goTo.bind(this, 'characterPage', {})}
                    >
                      Character Page (temporary fixed link)
                  </Button>
                  )
                }
                {
                  !isAuthenticated() && (
                    <Button
                      id="qsLoginBtn"
                      bsStyle="primary"
                      className="btn-margin"
                      onClick={this.login.bind(this)}
                    >
                      Log In
                  </Button>
                  )
                }
                {
                  isAuthenticated() && (
                    <Button
                      id="qsLogoutBtn"
                      bsStyle="primary"
                      className="btn-margin"
                      onClick={this.logout.bind(this)}
                    >
                      Log Out
                  </Button>
                  )
                }
              </Navbar.Header>
            </Col>
            <Col size="md-8">
              {
                isAuthenticated() && (
                  <h1>Welcome {profile.given_name}</h1>
                )
              }
            </Col>
          </Row>
        </Navbar>
      </Container>
    );
  }
}

export default Nav2;

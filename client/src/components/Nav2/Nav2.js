import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import API from "../../utils/API";
//import Callback from '../../Callback/Callback.js';
import history from '../../history.js';
// import Auth from '../../Auth/Auth.js';
// import Auth from './Auth/Auth.js';
import { Col, Container, Row } from "../Grid"



// const auth = new Auth();
// auth.login();

//const history = require('history')

//const auth = new Auth();


class Nav2 extends Component {
  state = {
    profile: {},
  }

  componentWillMount() {
    //console.log(isAuthenticated)
    //console.log(history.replace)
  }

  componentDidMount() {
    //console.log('user profile: ' + JSON.stringify(this.state.profile, 2, null));
    // console.log('History object: ' + JSON.stringify(history, 2, null));
    // console.log('this.history: ' + this.history)
    // console.log(history.replace)
    // console.log('this.props.history: ' + this.props.history)
    //console.log(this.state)
    this.loadProfile();
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

  checkStatus (email) {
    API.checkUserStatus(email).then(
      res => {
        //console.log(res.data[0])
        if(!res.data[0]){
          console.log("should route to createProfile page...")
          this.goTo('createProfile', this.state.profile)
        }
      }
    )
  }

  loadProfile () {
    const { userProfile, getProfile, isAuthenticated } = this.props.auth;
    if (isAuthenticated()) {
      if (!userProfile) {
        getProfile((err, profile) => {
          this.setState({ profile:profile},()=>{
            this.checkStatus(this.state.profile.email + '2222')
          });
          //console.log('user profile: ' + JSON.stringify(this.state.profile, 2, null));
        });
      } else {
        this.setState({ profile: userProfile },()=>{
          this.checkStatus(this.state.profile.email + '2222')
        });
      }
    }
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    const profile = this.state.profile

    return (
      <Container fluid>
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

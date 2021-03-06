import React, { Component } from "react";
import { Labelled, TextArea, FormBtn } from "../Form";
import { Container } from "../Grid";


//import {FormGroup} from "../Form/FormGroup";
// import {TextArea} from "../Form"
import FormCheckModal from "../Modal/FormCheck"
import "./CreateProfileForm.css"

class CreateProfileForm extends Component {
  constructor(props) {
    super(props);
    console.log(props.profile)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleClose = this.handleClose.bind(this)

    this.state = {
      email: '',
      emailConfirm: '',
      firstname: '',
      lastname: '',
      about: '',
      emailCheck: false,
      aboutCheck: true,
      nickname: '',
      showConfirm: false,
      validEntries: false
    }
  }

  componentDidMount() {
    this.loadProfile();
    console.log(this.props.auth)
  }

  filloutProfile(){
    console.log('loading profile in the form...')
    let initNicknm ='';
    let profile;
    if(this.state.profile){
      profile = this.state.profile
    } else {
      profile = this.props.profile
    }
    
      if(profile.email){
        initNicknm = profile.email.split('@')
        initNicknm = initNicknm[0]
      } else {
        initNicknm = profile.user_nickname
      }

      this.setState({
        email: profile.email ? profile.email: profile.user_email,
        firstname: profile.given_name ? profile.given_name: profile.user_firstname,
        lastname: profile.family_name ? profile.family_name: profile.user_lastname,
        nickname: initNicknm,
        about: profile.user_about ? profile.user_about: ''
      }, () => {
        //console.log(this.state)
      })
    
  }

  getUser(email) {
    this.props.API.getUser(email).then(
      res => {
        console.log(res.data)
        if (res.data.length === 0) {
          console.log("No user found; parse out user data into the form for profile creation...")
          this.filloutProfile();
        } else {
          console.log('user found! loading their profile into the state')
          this.setState({profile:res.data[0]},()=>{
            console.log(this.state.profile);
            this.filloutProfile();
          })
        }
      }
    )
  }

  loadProfile() {
    const { userProfile, getProfile, isAuthenticated } = this.props.auth;
    if (isAuthenticated()) {
      if (!userProfile) {
        console.log('need to load Auth0 profile')
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

  testLogin() {
    let packet={
      realm: 'Username-Password-Authentication',
      email: '',
      password: ''
    }
    this.props.auth.relogin(packet,(res)=>{
      console.log("Test!")
      console.log(res)
    });
  }

  validateEntries () {
    let st=this.state;
    if(st.firstname !== '' && st.lastname !== '' 
       && st.emailCheck && st.nickname !=='' 
       && (st.email === this.props.profile.email || st.email === this.props.profile.user_email)){
         console.log('entries are valid!')
        this.setState({validEntries:true})
    } else {this.setState({validEntries:false})}
  }

  handleInputChange = event => {
    const { id, value } = event.target;
    //onsole.log(value)
    this.setState({
      [id]: value
    }, () => {
      let eCheck = false;
      let abCheck = true;
      if (this.state.emailConfirm === this.state.email) {eCheck=true} else {eCheck=false}
      if (this.state.about.length <= 200) {abCheck=true} else {abCheck = false}

      this.setState({emailCheck:eCheck, aboutCheck: abCheck}, ()=> {
        this.validateEntries()
      })
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("Form submission heard!")
    //this.handleShow();
    let st=this.state;
    let packet = {
      user_firstname: st.firstname,
      user_lastname: st.lastname,
      user_about: st.about,
      user_email: st.email,
      user_nickname: st.nickname
    }

    console.log(packet);
    if(this.props.create){
      this.props.API.createUser(packet).then(
        res => {
          console.log(res)
        }
      )
    } else {
      // future code for submitting a profile edit
    }
  
  };

  handleClose() {
    this.setState({ showConfirm: false });
  }

  handleShow() {
    this.setState({ showConfirm: true }, ()=> console.log("Should be showing!"));
  }

  render() {
    const st = this.state
    return (
      <Container fluid>
        <form>
          <button onClick={this.props.auth.renewSession.bind(this)}>Test session recheck</button>
          <div className="form-group">
            <Labelled
              id="email"
              label="Email Address *"
              value={st.email}
              onChange={this.handleInputChange}
              data-valid={true}
              disabled={true}
            />
            <Labelled
              id="emailConfirm"
              label="Confirm Email Address *"
              value={st.emailConfirm}
              placeholder="Please confirm your email address"
              onChange={this.handleInputChange}
              data-valid={this.state.emailCheck}
            />
            <Labelled
              id="firstname"
              label="First Name *"
              value={st.firstname}
              placeholder="Please enter your first name"
              onChange={this.handleInputChange}
              data-valid={true}
            />
            <Labelled
              id="lastname"
              label="Last Name *"
              value={st.lastname}
              placeholder="Please enter your first name"
              onChange={this.handleInputChange}
              data-valid={true}
            />
            <Labelled
              id="nickname"
              label="Username *"
              value={st.nickname}
              placeholder="Please enter your username"
              onChange={this.handleInputChange}
              data-valid={true}
            />
            <TextArea
              id='about'
              label="User Bio"
              data-length={st.about.length}
              data-max="200"
              value={st.about}
              placeholder="Tell us a little bit about yourself!"
              data-valid={st.aboutCheck}
              onChange={this.handleInputChange}
            />
            <FormBtn onClick={this.handleFormSubmit} disabled={!this.state.validEntries}>Submit Profile</FormBtn>
          </div>
        </form>
        <FormCheckModal 
          show={this.state.showConfirm} 
          onHide={this.handleClose} 
          onClick={this.handleClose}
        />
      </Container>
    )
  }

}

export default CreateProfileForm;
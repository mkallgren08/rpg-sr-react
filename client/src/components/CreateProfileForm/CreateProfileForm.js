import React, { Component } from "react";
import { Labelled, TextArea, FormBtn } from "../Form";
import { Container } from "../Grid";
//import {FormGroup} from "../Form/FormGroup";
// import {TextArea} from "../Form"
import FormCheckModal from "../Modal"
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
    let initNicknm = this.props.profile.email.split('@')
    initNicknm = initNicknm[0]
    //console.log(initNicknm)

    this.setState({
      email: this.props.profile.email,
      firstname: this.props.profile.given_name ? this.props.profile.given_name : '',
      lastname: this.props.profile.family_name ? this.props.profile.family_name : '',
      nickname: initNicknm
    }, () => {
      //console.log(this.state)
    })
  }

  validateEntries () {
    let st=this.state;
    if(st.firstname !== '' && st.lastname !== '' 
       && st.emailCheck && st.nickname !=='' 
       && st.email === this.props.profile.email){
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
    this.handleShow();
    let st=this.state;
    let packet = {
      user_firstname: st.firstname,
      user_lastname: st.lastname,
      user_about: st.about,
      user_email: st.email,
      user_nickname: st.nickname
    }

    console.log(packet);
    this.props.API.createUser(packet).then(
      res => {
        console.log(res)
      }
    )
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
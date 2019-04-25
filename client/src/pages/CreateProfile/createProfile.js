import React, {Component} from "react";
// import Jumbotron from "../../components/Jumbotron";
import userAPI from "../../utils/apiRoutes/usersAPI";
// import DeleteBtn from "../../components/DeleteBtn";
//import { Button, Glyphicon, Navbar } from "react-bootstrap";
import {Container } from "../../components/Grid";
//import { List, ListItem } from "../../components/List";
import Nav2 from "../../components/Nav2";
//import { Input, TextArea, FormBtn } from "../../components/Form";
import CreateProfileForm from "../../components/CreateProfileForm"
// import Auth from "../../Auth";
import "./createProfile.css";

class CreateProfile extends Component {
  // This is the proper form of 'componentWillMount()'
  constructor(props){
    super(props)
    //console.log(this.props.auth)
    //console.log(this.props.location.state)
    this.state = {
      profile: this.props.location.state
    }
  }

  componentDidMount(){
    console.log("It's alive!")
    //console.log(this.state.profile)
    // this.loadProfile();
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render (){
    const profile = this.state.profile;
    //console.log(profile)

    return (
      <Container fluid>
        <Nav2 auth = {this.props.auth} />
        <h1>CREATE PROFILE PAGE</h1>
        <CreateProfileForm profile={profile} create={true} API = {userAPI} auth={this.props.auth}/>
      </Container>
      
    )
  }

}

export default CreateProfile;
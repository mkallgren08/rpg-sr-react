import React, { Component } from "react";
// import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
// import DeleteBtn from "../../components/DeleteBtn";
// import { Button, Glyphicon, Navbar } from "react-bootstrap";
import { Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
import Nav2 from "../../components/Nav2";
//import { Input, TextArea, FormBtn } from "../../components/Form";

class MainPage extends Component {
  state = {
    names: [],
    characterList: [],
  };
  //==============================================================
  //==============================================================
  // Component Mounting Functions
  //==============================================================

  // This creates the keystroke-logger function which lets the user select letters
  // document.addEventListener(
  //   "keydown",
  //   this._handleKeyDown.bind(this)
  // )
  componentWillMount() {
    // console.log(this.props.auth);
  }

  // Initial load of saved articles
  componentDidMount() {
    //this.loadBiodiversity();
    //this.loadWordToGuess();
    //this.loadTestData();
  };

  // API call to check user status


  // code to get biodiversity list
  loadTestData = () => {
    API.getTestData()
      .then(
        res => {
          console.log("test data: " + JSON.stringify(res.data, null, 2))
          console.log("First name in list: " + res.data[0]["name"])
          this.setState({
            names: res.data,
            firstName: res.data[0]["name"]
          })
          console.log("names state: " + JSON.stringify(this.state.names, null, 2))
        })
      // console.log(res.data.response.docs);
      .catch(err => console.log(err));
  };

  // This is a leftover from my template file but would like to leave it here in case I add 
  // an entry form for feedback in the future

  // handle form input
  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    this.readUserInput(event)
  };

  // This is the function that renders the page in the client's window.
  render() {
    const { isAuthenticated } = this.props.auth;

    console.log(isAuthenticated())
    return (
      <Container fluid className="siteWrapper">
        <Row>
          <Nav2 auth={this.props.auth} />
        </Row>
        <Row>
          {/* <Jumbotron>
            <h1>Hello {this.state.firstName}: Time to Get Coding!!</h1>
          </Jumbotron> */}
          <Container>
            {!isAuthenticated() ? (
              <div>
                <h4>Log in or create a new profile to start tracking your characters!</h4>
              </div>
            ) : (
              this.state.characterList.length>0?(
                <div><p>This is a temporary placeholder to show that characters are ready to be loaded</p></div>
              ):(
                <div>You don't seem to have any characters created yet!</div>
              )
            )}
          </Container>
        </Row>
      </Container >
    );
  }
}

export default MainPage;

import React, {Component} from 'react';
//import userAPI from '../../utils/apiRoutes/usersAPI';
import {Container} from '../../components/Grid';
import Nav2 from '../../components/Nav2'
import devChar from '../../utils/dummyData/sampleChar'

class CharacterPage extends Component {
  state = {

  };

  constructor(props) {
    super(props)
    this.state = {
      character: devChar
    }

  };

  componentDidMount(){
    console.log(devChar)
  };

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render(){
    return (
      <Container fluid>
        <Nav2 auth = {this.props.auth} />
        <h3>Testing Junk here!</h3>
      </Container>
    )
  }



}

export default CharacterPage;
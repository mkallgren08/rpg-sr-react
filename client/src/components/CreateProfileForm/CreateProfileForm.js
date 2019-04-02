import React, { Component } from "react";
import { Labelled } from "../Form/Labelled";
//import {FormGroup} from "../Form/FormGroup";
import "./CreateProfileForm.css"

class CreateProfileForm extends Component {
  constructor(props) {
    super(props);
    console.log(props.profile)
    this.handleInputChange = this.handleInputChange.bind(this)

    this.state = {
      email: '',
      emailConfirm: '',
      firstname: '',
      lastname: '',
      about:'',
      emailCheck:''
    }
  }

  componentDidMount() {
    this.setState({
      email: this.props.profile.email,
      firstname: this.props.profile.given_name?this.props.profile.given_name:'',
      lastname: this.props.profile.family_name?this.props.profile.family_name:'',
    }, () =>{
      console.log(this.state)
    })
  }

  handleInputChange = event => {
    const { id, value } = event.target;
    //onsole.log(value)
    this.setState({
      [id]: value
    }, () => {
      if(this.state.emailConfirm === this.state.email){
        this.setState({emailCheck:true})
      } else {
        this.setState({emailCheck:false})
      }
    });
  };

  render() {
    const st = this.state
    return (
      <form>
        <div className="form-group">
          <Labelled
            id="email"
            label="Email Address"
            value={st.email}
            onChange={this.handleInputChange}
            data-valid = {true}
            required
          />
          <Labelled
            id="emailConfirm"
            label="Confirm Email Address"
            value={st.emailConfirm}
            placeholder="Please confirm your email address"
            onChange={this.handleInputChange}
            data-valid = {this.state.emailCheck}
          />
        </div>
      </form>
    )
  }

}

export default CreateProfileForm;
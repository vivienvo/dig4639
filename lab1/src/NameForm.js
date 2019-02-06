import React from 'react';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', nameAvailable:false, isValid:true, setValid:props.setValid};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
    handleSubmit(event) {
      event.preventDefault();

    //alert('Welcome and Greetings, ' + this.state.value);
    if (/[^a-zA-Z]+/.test(this.state.value)) {
    // If the user input is not valid
    this.state.setValid (false);
  }
  else {
    if (this.state.value != "") {
    this.setState({nameAvailable: true});
    this.state.setValid(true);
  }
  }
}


  render() {
    if(!this.state.nameAvailable) {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
          <input type="submit" value="Submit" />
          {(!this.state.isValid) ?
          <p key="Error" class="errorText">Must be a valid a-z or A-Z</p>
          : null}
          </form>);
        } else {
          return (<div>Thanks! {this.state.value}</div>);
        }
      }
    }



  export default NameForm;

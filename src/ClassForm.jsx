import React, { Component } from 'react'

export class ClassForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: "",
          email: "",
          password: ""
        };
      }
    
      handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
      };
    
      handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
      };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="text"
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
    )
  };
}

export default ClassForm;


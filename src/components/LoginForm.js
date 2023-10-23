import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/LoginForm.css';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here, e.g., make an API request to validate the user's credentials
  };

  render() {
    return (
      <div class="login-form">
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Email:</label>
          <input type="email" name="email" value={this.state.email} onChange={this.handleInputChange} required />
          <label>Password:</label>
          <input type="password" name="password" value={this.state.password} onChange={this.handleInputChange} required />
          <button type="submit">Login</button>
        </form>
        <Link to="/ForgotPasswordForm">Forgot Password?</Link>
        <p>
          Don't have an account? <Link to="/RegistrationForm">Sign Up</Link>
        </p>
      </div>
    );
  }
}

export default LoginForm;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/ForgotPasswordForm.css';
class ForgotPasswordForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Handle forgot password logic here, e.g., send a password reset email
  };

  render() {
    return (
      <div className='forgot-password-form'>
        <h2>Forgot Password</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Email:</label>
          <input type="email" name="email" value={this.state.email} onChange={this.handleInputChange} required />
          <button type="submit">Reset Password</button>
        </form>
        <p>
          All ready have an account? <Link to="/LoginForm">Sign In</Link>
        </p>

      </div>
    );
  }
}

export default ForgotPasswordForm;

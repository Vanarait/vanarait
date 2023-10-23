import React, { Component } from 'react';
import '../css/TrainerRegistrationForm.css';

class TrainerRegistrationForm extends Component {
  constructor() {
    super();
    this.state = {
      full_name: '',
      email: '',
      phone: '',
      qualification: '',
      experience: '',
      specialization: '',
      courses_taught: '',
      password: '',
      confirm_password: '',
      resume: null,
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleFileChange = (event) => {
    const file = event.target.files[0];
    this.setState({ resume: file });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission, including file upload (this is typically done in the backend)
  }

  render() {
    return (
      <div className='trainer-registration-container'>
        <h2>Trainer Registration</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="full_name">Full Name:</label>
          <input type="text" id="full_name" name="full_name" required onChange={this.handleInputChange} />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required onChange={this.handleInputChange} />

          <label htmlFor="phone">Phone Number:</label>
          <input type="tel" id="phone" name="phone" required onChange={this.handleInputChange} />

          <label htmlFor="qualification">Qualification:</label>
          <input type="text" id="qualification" name="qualification" required onChange={this.handleInputChange} />

          <label htmlFor="experience">Years of Experience:</label>
          <input type="number" id="experience" name="experience" required onChange={this.handleInputChange} />

          <label htmlFor="specialization">Specialization:</label>
          <input type="text" id="specialization" name="specialization" required onChange={this.handleInputChange} />

          <label htmlFor="courses_taught">Courses Taught:</label>
          <input type="text" id="courses_taught" name="courses_taught" required onChange={this.handleInputChange} />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required onChange={this.handleInputChange} />

          <label htmlFor="confirm_password">Confirm Password:</label>
          <input type="password" id="confirm_password" name="confirm_password" required onChange={this.handleInputChange} />

          <label htmlFor="resume">Upload Resume (PDF, DOC, DOCX):</label>
          <input type="file" id="resume" name="resume" accept=".pdf, .doc, .docx" required onChange={this.handleFileChange} />

          <input type="submit" value="Register" />
        </form>
      </div>
    );
  }
}

export default TrainerRegistrationForm;

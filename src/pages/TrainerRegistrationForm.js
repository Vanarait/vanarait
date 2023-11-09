import React, { Component } from 'react';
import '../css/TrainerRegistrationForm.css';

class TrainerRegistration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      full_name: '',
      phone: '',
      experience: '',
      courses_taught: '',
      password: '',
      resume: null,
      errors: {},
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleFileChange = (e) => {
    const file = e.target.files[0];
    this.setState({ resume: file });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation here
    // If validation fails, update the errors state and prevent form submission
    const validationErrors = {};
    // Perform validation logic, e.g., check if required fields are empty, validate email format, etc.
    // If there are errors, set them in the validationErrors object

    if (Object.keys(validationErrors).length === 0) {
      // If there are no errors, submit the form data
      // You can use fetch or axios to send a POST request to your backend API
      // Example using fetch:
      fetch('http://localhost:8080/api/trainers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.state),
      })

        .then((response) => response.json())
        .then((data) => {
          // Handle the response from the server
          console.log('Success:', data);
        })
        .catch((error) => {
          // Handle errors
          console.log(error);
        });
    } else {
      // If there are validation errors, update the errors state to display error messages
      this.setState({ errors: validationErrors });
    }
  };
  render() {
    const { errors } = this.state;
    return (
      <div className='trainer-registration-container'>
        <h2>Trainer Registration</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="full_name">Full Name:</label>
          <input type="text" id="full_name" name="full_name" value={this.state.full_name} onChange={this.handleInputChange} />
          {errors.full_name && <span className="error-message">{errors.full_name}</span>}

          <label htmlFor="phone">Phone Number:</label>
          <input type="tel" id="phone" name="phone" requirvalue={this.state.phone} ed onChange={this.handleInputChange} />
          {errors.phone && <span className="error-message">{errors.full_name}</span>}

          <label htmlFor="experience">Years of Experience:</label>
          <input type="number" id="experience" name="experience" value={this.state.experience} onChange={this.handleInputChange} />
          {errors.experience && <span className="error-message">{errors.full_name}</span>}

          <label htmlFor="courses_taught">Courses Taught:</label>
          <input type="text" id="courses_taught" name="courses_taught" value={this.state.courses_taught} onChange={this.handleInputChange} />
          {errors.courses_taught && <span className="error-message">{errors.full_name}</span>}

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" reqvalue={this.state.password} onChange={this.handleInputChange} />
          {errors.password && <span className="error-message">{errors.full_name}</span>}

          <label htmlFor="resume">Upload Resume (PDF, DOC, DOCX):</label>
          <input type="file" id="resume" name="resume" accept=".pdf, .doc, .docx" value={this.state.resume} onChange={this.handleFileChange} />
          {errors.resume && <span className="error-message">{errors.full_name}</span>}

          <input type="submit" value="Register" />
        </form>
      </div>
    );
  }
}

export default TrainerRegistration;

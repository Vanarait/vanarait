import React, { useEffect } from 'react';
import $ from 'jquery'; // Import jQuery
import 'datatables.net';
import 'datatables.net-dt/css/jquery.dataTables.css'; // Import DataTables CSS
import '../css/OnlineTrainingDetails.css';

const ClassroomTraining = () => {
  useEffect(() => {
    // Initialize DataTables when the component mounts
    const table = $('#trainingTable').DataTable({
      // Configuration options
      paging: true, // Enable pagination
      lengthChange: true, // Show the number of entries dropdown
      searching: true, // Enable search
      pageLength: 10, // Default number of entries to display
    });

    // Make sure to destroy the DataTable instance when the component unmounts
    return () => {
      table.destroy();
    };
  }, []);
  // Inside the TrainingDetails component
return (
  <div className="container">
    <h1>Classroom Training Details</h1>
    <table id="trainingTable" className="table">
      <thead>
        <tr>
          <th>S.No</th>
          <th>Course</th>
          <th>Date</th>
          <th>Time</th>
          <th>Zoom Link</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Introduction to React</td>
          <td>2023-10-25</td>
          <td>10:00 AM - 12:00 PM</td>
          <td>
            <a href="https://example.com/zoom-link" target="_blank" rel="noopener noreferrer">
              Join Zoom
            </a>
          </td>
          <td>
            <button className="btn btn-primary">Edit</button>
            <button className="btn btn-danger">Delete</button>
          </td>
        </tr>
        {/* Add more rows for additional training sessions */}
      </tbody>
    </table>
  </div>
);

};


export default ClassroomTraining;

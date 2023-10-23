import React, { useEffect } from 'react';
import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-dt/css/jquery.dataTables.css';
import '../css/OnlineTrainingDetails.css';

const OnlineTrainingDetails = () => {
  useEffect(() => {
    // Simulated data (you can fetch this from an API)
    const trainingData = [
      {
        id: 1,
        course: 'React Js',
        date: '2023-10-25',
        time: '10:00 AM - 12:00 PM (IST)',
        zoomLink: 'https://example.com/zoom-link',
        register:'https://chat.whatsapp.com/FRRltwrNFWk42GGukiaQuf',
      },{
        id: 6,
        course: 'UI FullStack with React',
        date: '2023-10-25',
        time: '10:00 AM - 12:00 PM (IST)',
        zoomLink: 'https://example.com/zoom-link',
        register:'https://chat.whatsapp.com/KSZvtTqyLTa9ypsr4bbWaG',
      },{
        id: 3,
        course: 'Java FullStack with React',
        date: '2023-10-25',
        time: '10:00 AM - 12:00 PM (IST)',
        zoomLink: 'https://example.com/zoom-link',
        register:'https://chat.whatsapp.com/FnI1B8dwGLoGfx8eT4G5hv',
      },{
        id: 4,
        course: 'AWS DevOps',
        date: '2023-10-25',
        time: '10:00 AM - 12:00 PM (IST)',
        zoomLink: 'https://example.com/zoom-link',
        register:'https://chat.whatsapp.com/Coafqur8R9RGIb6FQB91Z7',
      },{
        id: 2,
        course: 'Azure DevOps',
        date: '2023-10-25',
        time: '10:00 AM - 12:00 PM (IST)',
        zoomLink: 'https://example.com/zoom-link',
        register:'https://chat.whatsapp.com/Ipuie4W9Hm43UBcuelGJfa',
      },{
        id: 5,
        course: 'AngularJS',
        date: '2023-10-25',
        time: '10:00 AM - 12:00 PM (IST)',
        zoomLink: 'https://example.com/zoom-link',
        register:'https://chat.whatsapp.com/G7SmI97JqfSBTMa09rU573',
      },
      // Add more training sessions here
    ];

    // Initialize DataTables when the component mounts
    const table = $('#trainingTable').DataTable({
      data: trainingData,
      columns: [
        { data: 'id' },
        { data: 'course' },
        { data: 'date' },
        { data: 'time' },
        {
          data: 'zoomLink',
          render: function (data, type, row) {
            return `<a href="${data}" target="_blank" rel="noopener noreferrer">Join Zoom</a>`;
          },
        },
        {
          data: 'register',
          render: function (data, type, row) {
            return `
              <button type="button" class="btn btn-secondary white-color" onclick="window.open('${data}', '_blank');">
                Register Now
              </button>
            `;
          },
        },
      ],
      paging: true,
      lengthChange: true,
      pageLength: 10,
      searching: true,
      info: true,
    });

    // Make sure to destroy the DataTable instance when the component unmounts
    return () => {
      table.destroy();
    };
  }, []);

  return (
    <div className="container OnlineTrainingDetails">
      <h2>Training Details</h2>
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
        <tbody></tbody>
      </table>
    </div>
  );
};

export default OnlineTrainingDetails;

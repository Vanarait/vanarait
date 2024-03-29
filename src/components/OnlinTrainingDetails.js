import React, { useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import $ from "jquery";
import "datatables.net";
import "datatables.net-dt/css/jquery.dataTables.css";
import Title from "./Common/Title";

const OnlineTrainingDetails = () => {
  useEffect(() => {
    // Simulated data (you can fetch this from an API)
    const trainingData = [
      {
        id: 1,
        course: "React Js",
        date: "NA",
        time: "7AM IST",
        zoomLink: "contact us - +91 9494494085",
        register: "https://chat.whatsapp.com/FRRltwrNFWk42GGukiaQuf",
      },
      {
        id: 6,
        course: "UI Full Stack with React",
        date: "8th Feb 2024",
        time: "6PM IST",
        zoomLink: "contact us - +91 9494494085",
        register: "https://chat.whatsapp.com/KSZvtTqyLTa9ypsr4bbWaG",
      },
      {
        id: 3,
        course: "Java Full Stack with React",
        date: "4th Feb 2024",
        time: "7AM IST)",
        zoomLink: "contact us - +91 9494494085",
        register: "https://chat.whatsapp.com/FnI1B8dwGLoGfx8eT4G5hv",
      },
      {
        id: 4,
        course: "NO SQL Database ",
        date: "NA",
        time: "8AM IST",
        zoomLink: "contact us - +91 9494494085",
        register: "https://chat.whatsapp.com/Coafqur8R9RGIb6FQB91Z7",
      },
      {
        id: 2,
        course: "AWS DevOps",
        date: "NA",
        time: "7:30 AM IST",
        zoomLink: "contact us - +91 9494494085",
        register: "https://chat.whatsapp.com/Ipuie4W9Hm43UBcuelGJfa",
      },
      {
        id: 5,
        course: "AngularJS",
        date: "NA",
        time: "7PM Ist",
        zoomLink: "contact us - +91 9494494085",
        register: "https://chat.whatsapp.com/G7SmI97JqfSBTMa09rU573",
      },
      // Add more training sessions here
    ];

    // Initialize DataTables when the component mounts
    const table = $("#trainingTable").DataTable({
      data: trainingData,
      columns: [
        { data: "id" },
        { data: "course" },
        { data: "date" },
        { data: "time" },
        {
          data: "zoomLink",
          render: function (data, type, row) {
            return `<a href="${data}" target="_blank" rel="noopener noreferrer">Join Zoom</a>`;
          },
        },
        {
          data: "register",
          render: function (data, type, row) {
            return `
              <button type="button" class="btn btn-danger white-color" onclick="window.open('${data}', '_blank');">
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
    <Container>
      <div className="my-3">
        <Title className="mb-2" level={1} style={{ fontSize: "1.5rem" }}>
          Training Details
        </Title>
        <Table
          id="trainingTable"
          responsive="sm"
          hover
          size="sm"
          className="py-3"
        >
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
        </Table>
      </div>
    </Container>
  );
};

export default OnlineTrainingDetails;

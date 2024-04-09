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
        date: "2nd May ",
        time: "7AM IST",
        zoomLink: "Contact us: +91 9494494085",
        register: "Ping me in WhatsApp",
      },
      {
        id: 6,
        course: "UI Full Stack with React",
        date: "8th May",
        time: "6PM IST",
        zoomLink: "Contact us: +91 9494494085",
        register: "Ping me in WhatsApp",
      },
      {
        id: 3,
        course: "Java Full Stack with React",
        date: "24th April",
        time: "7AM IST)",
        zoomLink: "Contact us: +91 9494494085",
        register: "Ping me in WhatsApp",
      },
      {
        id: 4,
        course: "Angular 12 with TypeScript ",
        date: "1st April",
        time: "8AM IST",
        zoomLink: "Contact us: +91 9494494085",
        register: "Ping me in WhatsApp",
      },
      {
        id: 2,
        course: "AWS DevOps",
        date: "12th April",
        time: "7:30 AM IST",
        zoomLink: "Contact us: +91 9494494085",
        register: "Ping me in WhatsApp",
      },
      {
        id: 5,
        course: "React Js with TypeScript",
        date: "28th Arpil",
        time: "7PM Ist",
        zoomLink: "Contact us: +91 9494494085",
        register: "Ping me in WhatsApp",
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
            return `Contact us: +91 9494494085`;
          },
        },
        {
          data: "register",
          render: function (data, type, row) {
            return `
              <button type="button" class="btn btn-danger white-color" '_blank');">
              Ping me in WhatsApp
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

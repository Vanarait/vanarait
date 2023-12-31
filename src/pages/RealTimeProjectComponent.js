import React from "react";
import Title from "../components/Common/Title";
import PaperStyle from "../components/Common/PaperStyle";
import { StyledTitle } from "../components/Common/StyledTitle";

const RealTimeProjectComponent = () => {
  return (
    <PaperStyle>
      <Title level={1} className="page-title">
        Real-Time Weather Dashboard
      </Title>
      <div className="p-4">
        <p>
          Build a real-time weather dashboard application that allows users to
          check the current weather conditions, forecasts, and related
          information for various locations. The application leverages Java for
          the backend, a user-friendly UI for the frontend, and Azure cloud
          technologies to store, process, and serve data.
        </p>
        <StyledTitle level={3}>Key Components:</StyledTitle>
        <ul>
          <li>
            <strong>Backend (Java):</strong>
            <ul>
              <li>
                Use Java to create a backend server responsible for fetching
                weather data from a weather API. You can use a framework like
                Spring Boot for this purpose.
              </li>
              <li>
                Implement APIs to allow the frontend to request weather
                information for specific locations.
              </li>
              <li>
                Set up scheduled tasks to periodically fetch and update weather
                data from the weather API.
              </li>
            </ul>
          </li>
          <li>
            <strong>User Interface (UI):</strong>
            <ul>
              <li>
                Develop a responsive and visually appealing frontend using
                technologies like React.js, Angular, or Vue.js.
              </li>
              <li>
                Create a user interface that enables users to search for weather
                information by location (e.g., city or coordinates).
              </li>
              <li>
                Display real-time weather data, including current conditions,
                temperature, humidity, wind speed, and forecasts.
              </li>
            </ul>
          </li>
          <li>
            <strong>Azure Cloud Technologies:</strong>
            <ul>
              <li>
                Use Azure Functions or Azure Logic Apps to trigger updates and
                data retrieval tasks, ensuring real-time data synchronization.
              </li>
              <li>
                Store weather data in an Azure SQL Database or Azure Cosmos DB.
              </li>
              <li>
                Implement Azure App Service for hosting your frontend
                application and backend API.
              </li>
            </ul>
          </li>
          <li>
            <strong>Weather API Integration:</strong>
            <ul>
              <li>
                Integrate with a weather data provider's API (e.g., OpenWeather,
                Weatherbit) to fetch real-time weather information.
              </li>
              <li>
                Ensure that you're able to retrieve data such as current weather
                conditions, forecasts, and historical weather data.
              </li>
            </ul>
          </li>
          <li>
            <strong>User Authentication (Optional):</strong>
            <ul>
              <li>
                Implement user authentication and registration using Azure
                Active Directory (Azure AD) or another authentication service.
              </li>
              <li>
                Allow users to save their favorite locations or customize their
                weather dashboard.
              </li>
            </ul>
          </li>
          <li>
            <strong>Real-Time Updates:</strong>
            <ul>
              <li>
                Implement WebSocket or Server-Sent Events (SSE) to provide
                real-time updates to the user interface. Users should see
                automatic updates without needing to refresh the page.
              </li>
            </ul>
          </li>
        </ul>
        <StyledTitle level={3}>Challenges:</StyledTitle>
        <ul>
          <li>Integrating real-time updates through WebSocket or SSE.</li>
          <li>Managing Azure resources effectively and securely.</li>
          <li>Handling the rate limits of the chosen weather API.</li>
          <li>Implementing responsive and visually appealing UI design.</li>
        </ul>
        <StyledTitle level={3}>Learning Outcomes:</StyledTitle>
        <ul>
          <li>
            Proficiency in Java, web development, and Azure cloud services.
          </li>
          <li>Experience with integrating third-party APIs.</li>
          <li>Knowledge of real-time application development.</li>
          <li>Skills in data visualization and data synchronization.</li>
        </ul>
        <p>
          This project provides a real-time application that leverages Java, UI,
          and Azure cloud technologies to deliver weather information to users
          in a user-friendly and dynamic manner. It combines backend
          development, frontend design, and cloud-based data management, making
          it a comprehensive and practical project.
        </p>
      </div>
    </PaperStyle>
  );
};

export default RealTimeProjectComponent;

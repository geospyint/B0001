// src/components/Services.jsx
import React from "react";

const Services = () => {
  return (
    <div>
      <h2>Services Offered</h2>
      <ol>
        <li>
          <strong>Spatial Analysis and Modeling:</strong>
          <ul>
            <li>
              Utilize advanced spatial analytics to derive meaningful insights
              from your geospatial data.
            </li>
            <li>
              Perform spatial modeling for better understanding and prediction
              of geographical patterns.
            </li>
          </ul>
        </li>
        <li>
          <strong>Custom GIS Application Development:</strong>
          <ul>
            <li>
              Design and develop custom GIS applications to streamline your
              workflow.
            </li>
            <li>
              Create user-friendly interfaces for easy data visualization and
              analysis.
            </li>
          </ul>
        </li>
        {/* Add more services as needed */}
      </ol>
    </div>
  );
};

export default Services;

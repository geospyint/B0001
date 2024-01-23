// src/components/HomePage.jsx
import React from "react";
import { Route, Routes } from "react-router-dom"; // Removed BrowserRouter as Router
import Header from "./Header";
import About from "./Tabs/About";
import Services from "./Tabs/Services";
import Process from "./Tabs/Process";
import Portfolio from "./Tabs/Portfolio";
import Pricing from "./Tabs/Pricing";
import Contact from "./Tabs/Contact";
import Geoportal from "./Tabs/Geoportal";

const HomePage = () => {
  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          {/* Set the default route to About using the index route */}
          <Route index element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/process" element={<Process />} />
          {/* Update the parent route path to have a trailing "*" */}
          <Route path="/portfolio/*" element={<Portfolio />} />{" "}
          {/* Added trailing "*" to the route path */}
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
};

export default HomePage;

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Home from "./assets/views/Home/Home";
import FindPeople from "./assets/views/FindPeople/FindPeople";
import Share from "./assets/views/Share/Share";

function About() {
  return (
    <div className="simple-page">
      <div className="simple-page-card">
        <span className="page-label">ABOUT FUTURDOOM</span>
        <h1>About Us</h1>
        <p>
          futurDooM is a new space where intelligence meets community. Explore,
          connect and experience something different.
        </p>
        <a href="/" className="back-button">
          ← Back to Home
        </a>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="simple-page">
      <div className="simple-page-card">
        <span className="page-label">GET IN TOUCH</span>
        <h1>Contact Us</h1>
        <p>
          Have a question or want to get in touch? We would love to hear from
          you.
        </p>
        <a href="/" className="back-button">
          ← Back to Home
        </a>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find-people" element={<FindPeople />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/share" element={<Share />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

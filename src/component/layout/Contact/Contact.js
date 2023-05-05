import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:asisg0924@gmail.com">
        <Button>Contact: asisg0924@gmail.com</Button>
      </a>
      <div
        style={{
          textAlign: "center",
          maxWidth: "950px",
          margin: "0 auto",
          border: "1px solid #e6e6e6",
          padding: "40px 25px",
          marginTop: "50px",
        }}
      >
        <div>78, Raja Subodh Chandra Mallick Rd, Near Ramgarh bus stop, Dakshin Raipur,</div>
        Garia, Kolkata, West Bengal 700084
        <div>Phone Number: 9475050669</div>
      </div>
    </div>
  );
};

export default Contact;

import React from "react";
import {
  MiddleWrapper,
  MiddleTitle,
  MiddlePara,
} from "../Middle/MiddleStyle";
import "../../app.css";
function Contact() {
  return (
    <MiddleWrapper>
      <MiddleTitle>Contact Information</MiddleTitle>
      <MiddlePara>
        Telephone: 01234567890
        Email: email@email.com
      </MiddlePara>
    </MiddleWrapper>
  );
}

export default Contact;
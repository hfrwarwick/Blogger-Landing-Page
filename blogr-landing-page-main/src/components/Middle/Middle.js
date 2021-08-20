import React from "react";
import {
  MiddleWrapper,
  MiddleBgCircles,
  MiddleTitle,
  MiddlePara,
  MiddlePhones,
} from "./MiddleStyle";
import "../../app.css";
function Middle() {
  return (
    <MiddleWrapper>
      <MiddlePhones
        src={`./images/illustration-phones.svg`}
        alt="phones"
        width="absolute"
      />
      <MiddleBgCircles
        src={`./images/bg-pattern-circles.svg`}
        alt="bg-circles"
        width='100%'
      />
      <MiddleTitle>State of the Art Infrastructure</MiddleTitle>
      <MiddlePara>
        With reliability and speed in mind, worldwide data centers provide the
        backbone for ultra-fast connectivity. This ensures your site will load
        instantly, no matter where your readers are, keeping your site
        competitive.
      </MiddlePara>
    </MiddleWrapper>
  );
}

export default Middle;
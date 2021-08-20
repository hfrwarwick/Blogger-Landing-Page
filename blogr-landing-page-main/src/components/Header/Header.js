import React from "react";
import { Hero, Hook, Title, SubTitle, Start, Learn } from "./HeaderStyle";
import Navbar from "./Navbar/Navbar";

function Header() {
  return (
    <Hero>
      <img src={`./images/bg-pattern-intro.svg`} alt="logo"  width='100%'/>
      <Navbar  />
      <Hook>
        <Title>A modern publishing platform</Title>
        <SubTitle>Grow your audience and build your online brand</SubTitle>
        <Start className="btn">Start for Free</Start>
        <Learn className="btn">Learn More</Learn>
      </Hook>
    </Hero>
  );
}

export default Header;
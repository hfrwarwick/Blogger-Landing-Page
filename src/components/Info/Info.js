import React from "react";
import {
  InfoWrapper,
  InfoTitle,
  InfoDivider,
  InfoContent,
  InfoText,
  InfoSubTitle,
  InfoPara,
  InfoImg,
} from "./InfoStyle";
import "../../app.css";

function Info({
  title,
  subtitle1,
  subtitle2,
  para1,
  para2,
  img,
}) {
  return (
    <InfoWrapper turn={title}>
      <InfoTitle>{title}</InfoTitle>
      <InfoDivider>
        <InfoContent turn={title}>
          <InfoText>
            <InfoSubTitle>{subtitle1}</InfoSubTitle>
            <InfoPara>{para1}</InfoPara>
          </InfoText>
          <InfoText>
            <InfoSubTitle>{subtitle2}</InfoSubTitle>
            <InfoPara>{para2}</InfoPara>
          </InfoText>
        </InfoContent>
      </InfoDivider>
      <InfoDivider>
        <InfoImg
          turn={title}
          src={`./images/illustration-${img}-desktop.svg`}
          alt="illustration"
          width="100%"
        />
         
      </InfoDivider>
    </InfoWrapper>
  );
}

export default Info;

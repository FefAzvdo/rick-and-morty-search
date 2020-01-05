import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  font-size: 12px;
  border-bottom: 1px solid #ddd;
  font-size: 14px;
`


const InfoBox = (props) => {
  return (
    <Wrapper>
      <p style={{ color: "#ddd" }}>{props.info}:</p>
      <p style={{ color: "#E56031" }}>{props.value}</p>
    </Wrapper>
  )
}

export default InfoBox 
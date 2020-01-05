import React from "react";
import styled from "styled-components";

import InfoBox from "./InfoBox"

const Container = styled.div`
   display: flex;
   flex-direction: column;
   border: 5px solid #fff;
   border-radius: 25px;
   font-family: Verdana, Geneva, Tahoma, sans-serif;
   margin: 10px;
`
const UpperPart = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  padding: 10px;
`

const ImageContainer = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;

  img {
    border: 3px solid #fff;
    border-radius: 25px;
    width: 100%;
    height: 300px;
  }
`

const TitleContainer = styled.div`
  flex: 1;
  color: "#fff";
  padding: 15px;
  border: 3px solid #fff;
  margin: 5px;
  width: 315px;

  h3{
    color:#E56031;
    font-size:16px;
  }

  p{
    color: #fff
  }
`

const BottomPart = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  padding: 30px;
  padding-top: 0;
  font-size: 213px;
`


const Card = (props) => {
  return (
    <Container>
      <UpperPart>
        <ImageContainer>
          <img src={props.url} alt="Foto do Personagem" />
        </ImageContainer>
        <TitleContainer>
          <h3>{props.name}</h3>
          <p>id - {props.id}</p>
        </TitleContainer>
      </UpperPart>
      <BottomPart>
        <InfoBox
          info="STATUS"
          value={props.status}
        />
        <InfoBox
          info="SPECIES"
          value={props.species}
        />
        {props.type !== "" &&
          <InfoBox
            info="TYPE"
            value={props.type}
          />
        }
        <InfoBox
          info="GENDER"
          value={props.gender}
        />
        <InfoBox
          info="ORIGIN"
          value={props.origin}
        />
        <InfoBox
          info="LAST LOCATION"
          value={props.lastLocation}
        />
      </BottomPart>
    </Container>
  )
}

export default Card
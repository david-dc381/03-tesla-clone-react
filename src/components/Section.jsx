import React from 'react';
import styled from 'styled-components';
import Fade from "react-reveal/Fade";

const Section = ({
  title,
  description,
  leftBtnText,
  rightBtnText,
  backgroundImg,
}) => {
  return (
    // Pasamos un prop de la imágen
    <Wrap bgImage={backgroundImg}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>
      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>{leftBtnText}</LeftButton>
            {
              // Si el rightBtnText existe en los sections que los muestre y si no que no lo haga
              rightBtnText && <RightButton>{rightBtnText}</RightButton>
            }
          </ButtonGroup>
        </Fade>
        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
};

export default Section

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("/images/model-s.jpg");
  display: flex;
  flex-direction: column;
  justify-content: space-between; // vertial
  align-items: center; // horizontal
  /* Imagen com props, manera corta */
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
  /* 
  Manera Larga de poner una imagen
  background-image: ${(props) => {
    return `url("/images/${props.bgImage}")`;
  }}; */

  /* Para hacer ese efecto de bajada y subida lenta en el scroll, en Home.jsx esta la otra parte del css */
  scroll-snap-align: start;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;

// De esta manera heredamos los estilos de LeftButton en RigthButton
const RightButton = styled(LeftButton)`
  background-color: #fff;
  opacity: 0.65;
  color: #000;
`;

const DownArrow = styled.img`
  margin-top: 10px;
  height: 40px;
  animation: animateDown infinite 1.5s;
`;

const Buttons = styled.div``;
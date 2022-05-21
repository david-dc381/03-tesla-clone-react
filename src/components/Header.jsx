import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';
const Header = () => {

  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);
  console.log(cars);


  return (
    <Container>
      <a href="#">
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        {/* Con esto mostramos los modelos de los autos que tenemos registrados en carSlice.jsx */}
        { cars && cars.map( (car, index) => (
          <a key={ index } href="#">{ car }</a>
        )) }
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        {/* icono de burger menu */}
        <CustomMenu onClick={ () => setBurgerStatus(true) } />
      </RightMenu>
      {/* show, para mostrar y ocultar el menu */}
      <BurgerNav show={ burgerStatus } >
        <CloseWrapper >
          <CustomClose onClick={ () => setBurgerStatus(false) } />
        </CloseWrapper>
        { cars && cars.map( (car, index) => (
          <li key={ index }><a href="#">{ car }</a></li>
        )) }
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Used Inventory</a></li>
        <li><a href="#">Trade-in</a></li>
        <li><a href="#">Cybertruck</a></li>
        <li><a href="#">Roadaster</a></li>
        <li><a href="#">Existing</a></li>
      </BurgerNav>
    </Container>
  );
}

export default Header

const Container = styled.div`
  align-items: center;
  justify-content: space-between;
  display: flex;
  min-height: 60px;
  padding: 0 20px;
  position: fixed;
  /* para centrar los elementos, aunque también se hace con el width: 100% */
  top: 0;
  left: 0;
  right: 0;
  z-index: 1; /* para mandar atrás el titulo y el párrafo */
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-weight: 600;
    padding: 0 10px;
    flex-wrap: nowrap;
    text-transform: uppercase;
  }

  /* par ocultar el menu cunado sea de cierto tamaño */
  @media(max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;

  a {
    font-weight: 600;
    margin-right: 10px;
    text-transform: uppercase;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: #fff;
  width: 300px;
  z-index: 10;
  list-style: none;
  text-align: start;
  padding: 20px;
  /* código para mostrar y ocultar el menu burger */
  transform: ${ props => props.show ? 'translateX(0)' : 'translateX(100%)' };
  transition: transform 0.2s;

  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    
    a {
      font-weight: bold;
    }
  }
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: end;
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;
import styled from 'styled-components';

export const Button = styled.button`
  position: relative;
  width: 150px;
  background-color: transparent;
  padding: 10px 15px; margin: 10px;
  overflow: hidden;
  border: 2px solid #053543;
  border-radius: 8px;
  font-family: 'Montserrat', sans-serif;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 14px;
  color: #053543;
  transition: .2s ease-in-out;
  opacity: ${props => props.disabled ? "0.5" : "1"};
  
  &:before {
    content: "";
    position: absolute;
    background: linear-gradient(90deg, rgba(255, 255, 255, .1), rgba(255, 255, 255, .5));
    height: 50px;
    width: 50px;
    top: -8px;
    left: -75px;
    transform: skewX(-135deg);
  }

  &:hover {
    background: #053543;
    color: #fdf5e6;
  }
  &:hover:before {
    left: ${props => props.disabled ? "none" : "350px"};
    transition: ${props => props.disabled ? "none" : "0.5s ease-in-out"};
  }
  &:active {
    transform: ${props => props.disabled ? "none" : "translateY(3px)"};
  }
`
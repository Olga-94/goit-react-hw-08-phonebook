import { NavLink } from "react-router-dom";
import styled from "@emotion/styled/macro";

export const Nav = styled.nav`
`;

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 0 15px;
  font-weight: 600;
  color: #2a363b;
  font-size: 20px;
  &.active{
background-color: rgb(138, 33, 84);
color: #fff;
border-radius:4px;
font-weight: 600;
  };

  &:hover{
    color:#fff;
  }

  @media screen and (max-width: 767px) {
    max-width: 180px;
     font-size: 14px;
    
  }
`;

export const Button = styled.button`
display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 500;
  color: #2a363b;
  font-size: 18px;

  @media screen and (max-width: 767px) {
    max-width: 180px;
     font-size: 14px;
  }
`;
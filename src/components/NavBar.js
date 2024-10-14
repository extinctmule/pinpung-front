import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBar = () => {
  return (
    <Nav>
      <Menu>
        <li>
          <IconLink to="/">🏠</IconLink>
        </li>
        <li>
          <IconLink to="/map">📍</IconLink>
        </li>
        <li>
          <IconLink to="/add-pung">➕</IconLink>
        </li>
        <li>
          <IconLink to="/bookmark">📑</IconLink>
        </li>
        <li>
          <IconLink to="/profile">👤</IconLink>
        </li>
      </Menu>
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.1);
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 500px;
  padding: 0;
  margin: 0;
`;

const IconLink = styled(Link)`
  font-size: 24px;
  text-decoration: none;
  color: #333;

  &:hover {
    color: #555;
  }
`;

export default NavBar;

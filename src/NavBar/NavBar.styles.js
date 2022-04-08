import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  margin-left: 1em;
  margin-top: 2em;
  text-decoration: none;
  color: rgba(18, 97, 115, 1);
  :hover {
    color: rgba(23, 120, 19, 1);
  }
`;

export const NavItem = styled.li`
  list-style: none;
  display: flex;
`;

export const NavList = styled.ul`
  display: flex;
`;

import { Link } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";

const NavBar = () => {
  const Nav = styled.nav`
    border: 1px solid black;
    height: 100%;
    width: 100%;
  `;

  const Ul = styled.ul`
    display: flex;
    justify-content: center;

    @media only screen and (max-width: 460px) {
      flex-direction: column;
    }
  `;
  const theme = {
    main: "mediumseagreen",
  };

  const Li = styled.li`
    & > a {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      color: black;
      padding: 20px;
      text-decoration: none;

      &:hover {
        background-color: #cfb20f;
      }
    }
  `;

  return (
    <Nav>
      <Ul>
        <Li>
          <Link to="/Home">Produtos</Link>
        </Li>
        <Li>
          <Link to="/AddProduct">Cadastrar Produto</Link>
        </Li>
      </Ul>
    </Nav>
  );
};

export default NavBar;

import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Navbar() {
  const Nav = styled.nav`
    flex-grow: 1;
  `;

  const Ul = styled.ul`
    list-style: none;
    padding: 0;
  `;
  const Li = styled.li`
    display: flex;

    &>h1{
      border-bottom: 1px solid black;
      color: white;
      width: 100%;
      text-align: center;
      padding: 10px;
    }

    & a{
      border-bottom: 1px solid black;

      color: white;
      flex: 1;
      padding: 10px;
      text-decoration: none;
      color: #fff;
      font-size: 1.0rem;
    };
    & a:hover{
      background: #00000020;
    }
  `;

  return (
    <Nav>
      <Ul>
        <Li>
          <h1>Flit Teca</h1>
        </Li>
        <Li>
          <Link to="/Home">Livros Emprestados</Link>
        </Li>
        <Li>
          <Link to="/LendBook">Cadastrar Empréstimo</Link>
        </Li>
      </Ul>
    </Nav>
  );
};

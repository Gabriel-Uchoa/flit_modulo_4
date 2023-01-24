import styled from "styled-components";

const NavBar = () => {
    const Nav = styled.nav`
        border:  1px solid black;
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

    const A = styled.a`
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        height: 100%;
        color: black;
        padding: 20px;

        &:hover {
            background-color: #cfb20f;
        }
    `;

    return (
        <Nav>
            <Ul>
                <li><A href="#">Categorias</A></li>
                <li><A href="#">Ofertas do Dia</A></li>
                <li><A href="#">Histórico</A></li>
                <li><A href="#">Moda</A></li>
            </Ul>

        </Nav>
    )
}

export default NavBar



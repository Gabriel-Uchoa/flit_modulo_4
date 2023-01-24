import styled from "styled-components";
import NavBar from "../Molecules/Navbar"
import SearchBar from "../Molecules/SearchBar";

const Header = () => {

    const Header = styled.header`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        background-color: #FFDB15;
        color: black;
        min-height: 20vh;
    `;

    return (
        <Header>
            <SearchBar/>
            <NavBar />
        </Header>
    )
}

export default Header
import styled from "styled-components";
import NavBar from "../Molecules/Navbar";
import SearchBar from "../Molecules/SearchBar";

const HeaderSection = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #ffdb15;
  color: black;
  min-height: 20vh;
`;


const Header = (props: any) => {

  return (
    <HeaderSection>
      <SearchBar onChange={props.onChange} value={props.value} />
      <NavBar />
    </HeaderSection>
  );
};

export default Header;

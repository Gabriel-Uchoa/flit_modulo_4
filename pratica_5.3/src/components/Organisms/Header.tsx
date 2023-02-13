import styled from "styled-components";
import Navbar from "../Molecules/Navbar";

const HeaderSection = styled.header`
    display: flex;
    flex-basis: 250px;
    background-color: #228b22  ;
    box-shadow: 4px 0px 17px -5px rgba(0,0,0,0.75);
`;

export default function Header() {
    return (
        <HeaderSection>
            <Navbar />
        </HeaderSection>
    );
}

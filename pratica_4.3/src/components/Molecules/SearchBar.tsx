import styled from "styled-components";

const SearchBar = () => {
  const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10vh;
  `;

  return (
    <Div>
      <input type="text" />
    </Div>
  );
};

export default SearchBar;

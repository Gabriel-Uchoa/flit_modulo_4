import styled from "styled-components";

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
`;

const SearchBar = (props: any) => {

  return (
    <Div>
      <input type="text" onChange={props.onChange} value={props.value} />
    </Div>
  );
};

export default SearchBar;

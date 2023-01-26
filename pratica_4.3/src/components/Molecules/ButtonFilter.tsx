import styled from "styled-components";

const ButtonFilter = (props: any) => {
  const Div = styled.div`
    text-align: center;
  `;
  const Button = styled.button`
    background-color: white;
    cursor: pointer;
  `;

  return (
    <Div>
      <Button onClick={props.action}>Ordem: {props.type}</Button>
    </Div>
  );
};

export default ButtonFilter;

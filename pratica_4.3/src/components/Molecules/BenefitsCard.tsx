import styled from "styled-components";
import BenefitsItem from "./BenefitsItem";

const BenefitsCards = () => {
  const Div = styled.div`
    background-color: white;
    display: flex;
    flex-direction: row;
    gap: 20px;
    min-height: 10vh;
    width: 80%;
    margin: 20px auto;
    justify-content: space-around;
    border-radius: 20px;
    align-items: center;
    font-size: 1rem;
    padding: 20px;

    @media only screen and (max-width: 460px) {
      flex-direction: column;
      text-align: center;
    }
  `;
  return (
    <Div>
      <BenefitsItem />
    </Div>
  );
};

export default BenefitsCards;

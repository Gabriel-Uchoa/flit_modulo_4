import styled from "styled-components";

export interface Product {
  name: string;
  brand: string;
  price: number;
  category: string;
  image: string;
}

const ProductCard = (props: any) => {
  const Card = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    background-color: white;
    overflow: hidden;
    transition: 0.3s;
    height: 100%;
    width: 100%;
    text-align: center;

    &:hover {
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
      height: 100%;
    }
  `;
  const Describe = styled.div`
    text-align: left;
    background-color: white;
    padding: 2px 16px;
  `;
  if (props.data) {
    if (props.filter) {
      var listOrdened = props.data.sort(
        (a: Product, b: Product) => a.price - b.price
      );
    } else {
      var listOrdened = props.data.sort(
        (a: Product, b: Product) => b.price - a.price
      );
    }

    return listOrdened.map((item: Product, index: number) => {
      return (
        <Card key={index}>
          <img src={item.image} alt={item.name} width="200" />
          <Describe>
            <h4>
              <b>R${item.price}</b>
            </h4>
            <p>
              {item.name}-{item.brand}
            </p>
          </Describe>
        </Card>
      );
    });
  } else {
    return <h4>Loading...</h4>;
  }
};

export default ProductCard;

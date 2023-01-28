import { useState } from "react";
import Benefits from "../Organisms/Benefits";
import Header from "../Organisms/Header";
import ProductList from "../Organisms/ProductList";

const HomeTemplate = () => {
  const [textFilter, setTextFilter] = useState('')
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextFilter(e.target.value)
  }

  return (
    <>
      <Header onChange={handleFilterChange} value={textFilter} />
      <Benefits />
      <ProductList textFilter={textFilter}/>
    </>
  );
};

export default HomeTemplate;

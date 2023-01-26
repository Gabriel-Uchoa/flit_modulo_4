import axios from "axios";
import { useEffect, useState } from "react";
import useDebbounce from "../../Hooks/useDebbounce";

function OrganismForm() {
  const [formValues, setFormValues] = useState({
    name: "",
    brand: "",
    category: "",
    price: "",
    image: "",
  });

  const [disabled, setDisabled] = useState(true);

  const debbounceValues = useDebbounce(formValues, 500);

  useEffect(() => {
    setDisabled(
      !(
        !!formValues.name &&
        !!formValues.brand &&
        !!formValues.category &&
        !!formValues.price &&
        !!formValues.image
      )
    );
  }, [debbounceValues]);

  async function addProductApi() {
    let payload = formValues;
    let res = await axios.post(
      "https://apigenerator.dronahq.com/api/HxPbug1F/ProductsStorage",
      payload
    );
    let data = res.data;
  }

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    addProductApi();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  return (
    <form>
      <div>
        <label htmlFor="name">Nome:</label>
        <input
          name="name"
          type="text"
          onChange={handleChange}
          value={formValues.name}
        />
      </div>
      <div>
        <label htmlFor="brand">Marca:</label>
        <input
          name="brand"
          type="text"
          onChange={handleChange}
          value={formValues.brand}
        />
      </div>

      <div>
        <label htmlFor="category">Categoria:</label>
        <input
          name="category"
          type="text"
          onChange={handleChange}
          value={formValues.category}
        />
      </div>
      <div>
        <label htmlFor="price">Preço:</label>
        <input
          name="price"
          type="text"
          onChange={handleChange}
          value={formValues.price}
        />
      </div>

      <div>
        <label htmlFor="image">Imagem:</label>
        <input
          name="image"
          type="text"
          onChange={handleChange}
          value={formValues.image}
        />
      </div>

      <button disabled={disabled} onClick={handleSubmit}>
        Cadastrar
      </button>
    </form>
  );
}
export default OrganismForm;

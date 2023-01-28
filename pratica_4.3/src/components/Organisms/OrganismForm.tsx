import axios from "axios";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import styled from "styled-components";
import useDebbounce from "../../Hooks/useDebbounce";
import FieldAddProduct from "../Molecules/FieldAddProduct";

interface Errors {
  name?: string;
  brand?: string;
  price?: string;
  category?: string;
  image?: string;
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  width: 280px;
  margin: 20px auto;
  border-radius: 5px;
  background-color: white;
  padding: 20px;
`

function OrganismForm() {

  const formik = useFormik({
    initialValues: {
      name: "",
      brand: "",
      category: "",
      price: 0,
      image: "",
    },
    onSubmit: (values) => {
      addProductApi(values)
    },
    validate: (values) => {
      const errors: Errors = {};

      if (!values.name) {
        errors.name = "Preencha o campo!";
      } else if (/[^A-Z0-9a-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÒÖÚÇÑ ]+/g.test(values.name)) {
        errors.name = "Nome Inválido!";
      }

      if (!values.brand) {
        errors.brand = "Preencha o campo!";
      } else if (/[^A-Z0-9a-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÒÖÚÇÑ ]+/g.test(values.brand)) {
        errors.brand = "Marca Inválida!";
      }

      if (!values.category) {
        errors.category = "Preencha o campo!";
      } else if (/[^A-Z0-9a-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÒÖÚÇÑ ]+/g.test(values.category)) {
        errors.category = "Categoria Inválida!";
      }

      if (!values.image) {
        errors.image = "Preencha o campo!";
      }

      if (!values.price) {
        errors.price = "Preencha o campo!";
      } else if (values.price < 0) {
        errors.price = "Informe um valor positivo!";
      }

      return errors;
    },
  });

  const [disabled, setDisabled] = useState(true);

  const debbounceValues = useDebbounce(formik.values, 500);

  useEffect(() => {
    setDisabled(
      !(
        !!formik.values.name &&
        !!formik.values.brand &&
        !!formik.values.category &&
        !!formik.values.price &&
        !!formik.values.image
      )
    );
  }, [debbounceValues]);

  async function addProductApi(values: {}) {
    let payload = values;
    let res = await axios.post(
      "https://apigenerator.dronahq.com/api/HxPbug1F/ProductsStorage",
      payload
    );
  }

  return (
    <Form onSubmit={formik.handleSubmit}>

      <FieldAddProduct
        name="name"
        label="Nome"
        onChange={formik.handleChange}
        value={formik.values.name}
        error={formik.errors.name}
      />

      <FieldAddProduct
        name="brand"
        label="Marca"
        onChange={formik.handleChange}
        value={formik.values.brand}
        error={formik.errors.brand}
      />

      <FieldAddProduct
        name="category"
        label="Categoria"
        onChange={formik.handleChange}
        value={formik.values.category}
        error={formik.errors.category}
      />

      <FieldAddProduct
        name="price"
        label="Preço"
        onChange={formik.handleChange}
        type="number"
        value={formik.values.price}
        error={formik.errors.price}
      />

      <FieldAddProduct
        name="image"
        label="Imagem"
        onChange={formik.handleChange}
        value={formik.values.image}
        error={formik.errors.image}
      />

      <button type="submit" disabled={disabled}>
        Cadastrar
      </button>
    </Form>
  );
}
export default OrganismForm;

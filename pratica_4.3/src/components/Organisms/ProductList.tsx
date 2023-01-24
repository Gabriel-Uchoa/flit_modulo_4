import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"
import ProductCard from "../Molecules/ProductCard"
import { QueryClient, QueryClientProvider, useQuery, useQueryClient } from 'react-query'
import ButtonFilter from "../Molecules/ButtonFilter"

const qc = new QueryClient()

const getData = async () => {
    const { data } = await axios.get("https://apigenerator.dronahq.com/api/HxPbug1F/ProductsStorage")
    return data
}

function ProductList() {
    return (
        <QueryClientProvider client={qc}>
            <ProductListData />
        </QueryClientProvider>
    )
}

function ProductListData() {
    const queryClient = useQueryClient()
    const { data } = useQuery("products", getData)
    const [filter, setFilter] = useState(true)
    const [valueText, setValueText] = useState("Crescente")

    const onFilter = () => {
        setFilter(!filter)
        if (!filter) {
            setValueText("Crescente")
        } else {
            setValueText("Decrescente")
        }
    }

    const SectionProducts = styled.div`
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-gap: 20px;
        width: 80%;
        margin: 20px auto;
        align-items: stretch;
    `


    return (
        <>
            <ButtonFilter action={onFilter} type={valueText} />
            <SectionProducts>
                <ProductCard data={data} filter={filter} />
            </SectionProducts>
        </>
    )
}



export default ProductList
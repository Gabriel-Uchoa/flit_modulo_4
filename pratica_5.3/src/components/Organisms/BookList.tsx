import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"
import CardBook from "../Molecules/CardBook"

const GridBooks = styled.div`
    display: grid;
    padding: 20px;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
`


const BookList = () => {
    const [listBook, setListBook] = useState([])

    useEffect(() => {
        getBookListApi()
    }, [])

    const getBookListApi = async () => {
        const response = await axios.get('https://apigenerator.dronahq.com/api/w3FR1Sxk/livros_emprestados')
        setListBook(response.data)
    }

    return (
        <GridBooks>
            {listBook.map((livro) => {
                console.log(livro)
                return (
                    <CardBook key={livro['id']} data={livro} />
                )
            })}
        </GridBooks>
    )
}

export default BookList
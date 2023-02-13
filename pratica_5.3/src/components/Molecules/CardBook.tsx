import styled from "styled-components"

const Card = styled.div`
    border-radius: 20px;
    padding: 20px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`

const CardDescribe = styled.div`
    padding: 0px 20px;
`

const CardBook = (props: any) => {

    return (
        <Card>
            <div>
                <h3>Livro</h3>
                <CardDescribe>
                    <h5> Titulo:{props.data.titulo}</h5>
                    <h5> Autor:{props.data.autor}</h5>
                    <h5> Editora:{props.data.editora}</h5>
                    <h5> Ano de Publicação:{props.data.ano_publicacao}</h5>
                </CardDescribe>
            </div>
            <div>
                <h3>Pessoa</h3>
                <CardDescribe>
                    <h5> Nome:{props.data.nome}</h5>
                    <h5> CPF:{props.data.cpf}</h5>
                    <h5> Email:{props.data.email}</h5>
                    <h5> Email:{props.data.telefone}</h5>
                </CardDescribe>
            </div>
        </Card>
    )

}

export default CardBook
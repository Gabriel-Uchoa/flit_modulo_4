import { useEffect, useReducer, useState } from "react"
import { InAction, InState } from "../interfaces/interfaces"
import { Formik, Form } from 'formik';
import * as Yup from 'yup'
import FieldForm from "../Molecules/FieldForm"
import styled from "styled-components";
import axios from "axios";

const initialState: InState = {
    pessoa: { nome: '', cpf: '', email: '', telefone: '' },
    livro: { titulo: '', autor: '', editora: '', ano_publicacao: '' },
    emprestimo: { data: '' }
}

function reducer(state: InState, action: InAction) {
    switch (action.type) {
        case 'emprestar_livro':
            return {
                ...state,
                pessoa: {
                    nome: action.payload.pessoa.nome,
                    cpf: action.payload.pessoa.cpf,
                    email: action.payload.pessoa.email,
                    telefone: action.payload.pessoa.telefone,
                },
                livro: {
                    titulo: action.payload.livro.titulo,
                    autor: action.payload.livro.autor,
                    editora: action.payload.livro.editora,
                    ano_publicacao: action.payload.livro.ano_publicacao,
                },
                emprestimo: { data: action.payload.emprestimo.data }
            }
        default:
            return state
    }
}

const formSchema = Yup.object().shape({
    pessoa: Yup.object().shape({
        nome: Yup.string().required('Campo Obrigatório'),
        email: Yup.string().email('Email Inválido').required('Campo Obrigatório'),
        cpf: Yup.string().required('Campo Obrigatório'),
        telefone: Yup.string().required('Campo Obrigatório'),
    }),
    livro: Yup.object().shape({
        titulo: Yup.string().required('Campo Obrigatório'),
        autor: Yup.string().required('Campo Obrigatório'),
        editora: Yup.string().required('Campo Obrigatório'),
        ano_publicacao: Yup.string().required('Campo Obrigatório'),
    }),
});

const FormStyle = styled.div`
    display: flex;
    margin: 10px auto;
    flex-direction: column;
    justify-content: space-around;
    width: 80vw;
    padding: 20px;
    border-radius: 20px;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;`
const Div = styled.div`
    gap: 10px;
    display: flex;
    flex-direction: row;
   
`

const FormsCadastroEmprestimo = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        console.log(state)
    }, [state])

    function createPayload(data: InState) {
        const timeElapsed = Date.now();
        const today = new Date(timeElapsed);

        dispatch({
            type: "emprestar_livro",
            payload: {
                pessoa: {
                    nome: data.pessoa.nome,
                    cpf: data.pessoa.cpf,
                    email: data.pessoa.email,
                    telefone: data.pessoa.telefone
                },
                livro: {
                    titulo: data.livro.titulo,
                    autor: data.livro.autor,
                    editora: data.livro.editora,
                    ano_publicacao: data.livro.ano_publicacao
                },
                emprestimo: { data: today.toISOString() }
            }
        })

        const dataPost = {
            nome: state.pessoa.nome,
            cpf: state.pessoa.cpf,
            email: state.pessoa.email,
            telefone: state.pessoa.telefone,
            titulo: state.livro.titulo,
            autor: state.livro.autor,
            editora: state.livro.editora,
            ano_publicacao: state.livro.ano_publicacao,
            data: state.emprestimo.data
        }
        axios.post("https://apigenerator.dronahq.com/api/w3FR1Sxk/livros_emprestados", dataPost)
    }

    return (
        <Formik initialValues={initialState} onSubmit={createPayload} validationSchema={formSchema}>
            <FormStyle as={Form}>
                <Div>
                    <FieldForm contentLabel="Nome" name="pessoa.nome" />
                    <FieldForm contentLabel="E-mail" name="pessoa.email" />
                    <FieldForm contentLabel="CPF" name="pessoa.cpf" />
                    <FieldForm contentLabel="Telefone" name="pessoa.telefone" />
                </Div>
                <Div>
                    <FieldForm contentLabel="Titulo" name="livro.titulo" />
                    <FieldForm contentLabel="Autor" name="livro.autor" />
                    <FieldForm contentLabel="Editora" name="livro.editora" />
                    <FieldForm contentLabel="Ano de publicação" name="livro.ano_publicacao" />
                </Div>
                <Div>
                    <button type="submit">Cadastrar</button>
                    <button type="reset">Cancelar</button>
                </Div >
            </FormStyle>
        </Formik>
    )
}

export default FormsCadastroEmprestimo
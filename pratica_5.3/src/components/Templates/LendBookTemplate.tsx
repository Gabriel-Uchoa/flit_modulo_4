import styled from "styled-components";
import FormsCadastroEmprestimo from "../Organisms/FormsCadastroEmprestimo";
import Header from "../Organisms/Header";

const Main = styled.main`
	display: flex;
	min-height: 100vh;
`
const Content = styled.div`
	width: 100%;
	padding: 20px;
	background-color: #dedede;
`

export default function LendBookTemplate() {
	return (
		<Main>
			<Header />
			<Content>
				<h1>Cadastrar Emprestimo</h1>
				<FormsCadastroEmprestimo />
			</Content>
		</Main>
	);
}

import styled from "styled-components";
import BookList from "../Organisms/BookList";
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
export default function HomeTemplate() {
	return (
		<Main>
			<Header />
			<Content>
				<h1>Livros Emprestados</h1>
				<BookList />
			</Content>
		</Main>
	);
}

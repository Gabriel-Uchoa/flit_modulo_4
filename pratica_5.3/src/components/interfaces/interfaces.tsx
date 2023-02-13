export interface InState {
	pessoa: {
		nome: string,
		cpf: string,
		email: string,
		telefone: string
	},
	livro: {
		titulo: string,
		autor: string,
		editora: string,
		ano_publicacao: string
	},
	emprestimo: { data: string }
}

export interface InAction {
	type: string,
	payload: InState
}

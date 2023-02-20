import { render, screen } from "@testing-library/react"
import CitationCard from "../Molecules/CitationCard"

test("O Componente deve ser renderizado corretamente", () => {
    render(<CitationCard
        citation="teste de citação"
        author="teste de autor"
        movie="teste de obra"
        buttons={true}
    />)

    const CitationCardTest = screen.getByTestId("test-citation-card")
    expect(CitationCardTest).toBeInTheDocument()
    expect(CitationCardTest.textContent).toBe("teste de citaçãoteste de autor - teste de obra 12345678910")
})
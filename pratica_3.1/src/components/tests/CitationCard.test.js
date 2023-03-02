import { render, screen } from "@testing-library/react"
import CitationCard from "../Molecules/CitationCard";

const props = {
    citation: 'Citation Test',
    author: 'Author Test',
    movie: 'Movie Test',
    note: "5"
};

describe('Renderizar Component CitationCard', () => {
    test('Renderização CitationCard sem buttons', () => {
        render(<CitationCard {...props} buttons={false} />);
        const citationContent = screen.getByText(props.citation);
        const authorContent = screen.getByText(`${props.author} - ${props.movie} ${props.note}`);

        expect(authorContent).toBeInTheDocument();
        expect(citationContent).toBeInTheDocument();
    });
    test('Renderização CitationCard com buttons', () => {
        render(<CitationCard {...props} buttons={true} />);
        const citationContent = screen.getByText(props.citation);
        const authorContent = screen.getByText(`${props.author} - ${props.movie} ${props.note}`);
        
        expect(authorContent).toBeInTheDocument();
        expect(citationContent).toBeInTheDocument();
        expect(screen.getAllByRole('button')).toHaveLength(10)
    });
});
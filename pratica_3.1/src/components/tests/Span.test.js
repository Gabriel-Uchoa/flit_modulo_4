import { render, screen } from "@testing-library/react"
import Span from "../Atoms/Span";

test('Renderização do children Span', () => {
    render(<Span>teste span</Span>);
    const span = screen.getByText('teste span');
    expect(span).toBeInTheDocument();
});

import { fireEvent, render, screen } from "@testing-library/react"
import Button from "../Atoms/Button";

describe('Renderizar Component Button Corretamente', () => {
    test('Renderização do children Button', () => {
        render(<Button>teste</Button>);
        const button = screen.getByText('teste');
        expect(button).toBeInTheDocument();
    });
    test('Chamada de funcão via props', () => {
        const callFn = jest.fn();
        render(<Button onAction={callFn}>teste</Button>);
        const button = screen.getByText('teste');
        fireEvent.click(button);
        expect(callFn).toHaveBeenCalled();
    });
});
import Button from "../atoms/Button";

const Operations = (props) => {
    return (
        <div>
            <Button OnAction={props.OnClickSum}>Somar</Button>
            <Button OnAction={props.OnClickSubtraction}>Subtrair</Button>
            <Button OnAction={props.OnClickMultiplication}>Multiplicar</Button>
            <Button OnAction={props.OnClickDivision}>Dividir</Button>
        </div>
    )
}
export default Operations
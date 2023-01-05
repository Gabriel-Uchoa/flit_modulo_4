import { useState } from "react";

const Buttons = (props) => {
    const [result, setResult] = useState(0)

    const handleClickSomar = () => {
        setResult(props.num1 + props.num2)
    }
    const handleClickSubtrair = () => {
        setResult(props.num1 - props.num2)
    }
    const handleClickMultiplicar = () => {
        setResult(props.num1 * props.num2)
    }
    const handleClickDividir = () => {
        setResult(props.num1 / props.num2)
    }

    return (
        <>
            <div>
                <button onClick={handleClickSomar}>SOMAR</button>
                <button onClick={handleClickSubtrair}>SUBTRAIR</button>
                <button onClick={handleClickMultiplicar}>MULTIPLICAR</button>
                <button onClick={handleClickDividir}>DIVIDIR</button>
            </div>
            <h1>Resultado: {result}</h1>
        </>
    )
}

export default Buttons

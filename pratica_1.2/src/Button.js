import {useState } from "react"
import History from "./History"

const Button = (props) => {
    const [result, setResult] = useState()
    const [HistoricoItem, setHistoricoItem] = useState([])

    const handleClickSomar = () => {
        var soma = props.num1 + props.num2
        setResult(soma)
        setHistoricoItem(HistoricoItem => [...HistoricoItem, `${props.num1} + ${props.num2} =  ${soma} `])
    }
    const handleClickSubtrair = () => {
        var subtracao = props.num1 - props.num2
        setResult(subtracao)
        setHistoricoItem(HistoricoItem => [...HistoricoItem, `${props.num1} - ${props.num2} =  ${subtracao} `])
    }
    const handleClickMultiplicar = () => {
        var multiplicacao = props.num1 * props.num2
        setResult(multiplicacao)
        setHistoricoItem(HistoricoItem => [...HistoricoItem, `${props.num1} * ${props.num2} =  ${multiplicacao} `])
    }
    const handleClickDividir = () => {
        var divisao = props.num1 / props.num2
        setResult(divisao)
        setHistoricoItem(HistoricoItem => [...HistoricoItem, `${props.num1} / ${props.num2} =  ${divisao} `])
    }

    return (
        <>
            <div>
                <button onClick={handleClickSomar}>SOMAR</button>
                <button onClick={handleClickSubtrair}>SUBTRAIR</button>
                <button onClick={handleClickMultiplicar}>MULTIPLICAR</button>
                <button onClick={handleClickDividir}>DIVIDIR</button>
            </div>
            {result ? (
                <div>
                    <h1> Resultado: {result}</h1>
                    <History values={HistoricoItem} />
                </div>
            ) : (
                false
            )

            }

        </>
    )
}


export default Button


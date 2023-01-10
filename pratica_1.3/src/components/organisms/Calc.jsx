import Operations from "../molecules/Operations"
import Result from "../molecules/Result"
import Form from "../molecules/Form"
import ListHistoric from "../molecules/ListHistoric"
import { useState } from "react"

const Calc = () => {
    const [result, setResult] = useState()
    const [historic, setHistoric] = useState([])

    const [num1, setNum1] = useState()
    const [num2, setNum2] = useState()
    
    const [count, setCount] = useState(0)

    const handleNum1 = (e) => setNum1(e.target.value)
    const handleNum2 = (e) => setNum2(e.target.value)

    const handleClickSum = () => {
        var sum = parseFloat(num1) + parseFloat(num2)
        setResult(sum)
        setCount(count + 1)
        setHistoric(historic => [...historic, `${num1} + ${num2} =  ${sum} `])
    }
    const handleClickSubtraction = () => {
        var subtraction = parseFloat(num1) - parseFloat(num2)
        setResult(subtraction)
        setCount(count + 1)
        setHistoric(historic => [...historic, `${num1} - ${num2} =  ${subtraction} `])
    }
    const handleClickMultiplication = () => {
        var multiplication = parseFloat(num1) * parseFloat(num2)
        setResult(multiplication)
        setCount(count + 1)
        setHistoric(historic => [...historic, `${num1} * ${num2} =  ${multiplication} `])
    }
    const handleClickDivision = () => {
        var division = parseFloat(num1) / parseFloat(num2)
        setResult(division)
        setCount(count + 1)
        setHistoric(historic => [...historic, `${num1} / ${num2} =  ${division} `])
    }

    return (
        <div>
            <Form OnChangeNum1={handleNum1} OnChangeNum2={handleNum2} />
            <Operations
                OnClickSum={handleClickSum}
                OnClickSubtraction={handleClickSubtraction}
                OnClickMultiplication={handleClickMultiplication}
                OnClickDivision={handleClickDivision}
            />
            {result ? (
                <div>
                    <Result text={result} />
                    <ListHistoric values={historic} keyItem={count} />
                </div>
            ) : (
                false
            )}
        </div>
    )
}

export default Calc
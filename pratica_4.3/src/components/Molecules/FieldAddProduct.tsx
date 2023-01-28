import styled from "styled-components"

interface Field {
    name: string,
    label: string,
    onChange: React.ChangeEventHandler<HTMLInputElement>,
    value: string | number,
    error?: string,
    type?: string
}

const ErrorMensage = styled.span`
    color: red;
    font-size: 14px;
`

const Div = styled.div`
    display: flex;
    flex-direction: column;
    margin: 8px 0px;
    height: 60px;

    &>input{
        height: 100%;
        width: 100%;
}
`

//https://stackoverflow.com/questions/22573494/react-js-input-losing-focus-when-rerendering
const FieldAddProduct = (props: Field) => {
    return (
        <Div>
            <label htmlFor={props.name}>{props.label}:</label>
            <input
                name={props.name}
                type={props.type ? props.type : "text"}
                onChange={props.onChange}
                value={props.value}
            />
            <ErrorMensage>{props.error}</ErrorMensage>
        </Div>
    )
}

export default FieldAddProduct
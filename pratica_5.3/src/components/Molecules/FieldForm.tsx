import { ErrorMessage, Field } from "formik"
import styled from "styled-components"


const FieldInput = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    margin-bottom: 10px;
`
const InputStyle = styled.input`
    padding: 5px;
    outline: none;
    border-radius: 10px;
`

const Error = styled.span`
    color: red;
    float: right;
    font-size: 14px;
`

const FieldForm: React.FC<{ contentLabel: string, name: string, type?: string }> = (props) => {
    return (
        <FieldInput>
            <label htmlFor={props.name}>{props.contentLabel}:  <ErrorMessage name={props.name} component={Error} /></label>
            <InputStyle as={Field} type={props.type ? props.type : "text"} name={props.name} />

        </FieldInput>
    )
}

export default FieldForm
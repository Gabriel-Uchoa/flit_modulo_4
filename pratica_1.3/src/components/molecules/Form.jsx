import Input from "../atoms/Input"
import Label from "../atoms/Label"

const Form = (props) => {
    return (
        <div>
            <div>
                <Label html="num1" text="Num1:" />
                <Input change={props.OnChangeNum1} type="number" name="Num1" id="Num1" />
            </div>
            <div>
                <Label html="num2" text="Num2:" />
                <Input change={props.OnChangeNum2} type="number" name="Num2" id="Num2" />
            </div>
        </div>
    )
}
export default Form
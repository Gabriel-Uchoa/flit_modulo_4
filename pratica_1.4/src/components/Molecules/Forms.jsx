import Label from "../Atoms/Label"
import InputItem from "../Atoms/InputItem"
const Forms = () => {

    return (
        <div>
            <Label id="labelText" html="text1" text="text1" />
            <InputItem type="text" name="text1" id="text1" />
        </div>
    )
}
export default Forms
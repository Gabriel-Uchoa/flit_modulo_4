import Button from "../Atoms/Button"

const Buttons = (props) => {
    return (
        <div>
            <Button id={props.id} click={props.clickAction} textContent="1" />
            <Button id={props.id} click={props.clickAction} textContent="2" />
            <Button id={props.id} click={props.clickAction} textContent="3" />
            <Button id={props.id} click={props.clickAction} textContent="4" />
            <Button id={props.id} click={props.clickAction} textContent="5" />
            <Button id={props.id} click={props.clickAction} textContent="6" />
            <Button id={props.id} click={props.clickAction} textContent="7" />
            <Button id={props.id} click={props.clickAction} textContent="8" />
            <Button id={props.id} click={props.clickAction} textContent="9" />
            <Button id={props.id} click={props.clickAction} textContent="10" />
        </div>
    )
}

export default Buttons
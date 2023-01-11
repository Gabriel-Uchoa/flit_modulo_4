import Button from "../Atoms/Button"

const Buttons = (props) => {
    return (
        <div>
            <Button id="1" click={props.clickAction} textContent="1" />
            <Button id="2" click={props.clickAction} textContent="2" />
            <Button id="3" click={props.clickAction} textContent="3" />
            <Button id="4" click={props.clickAction} textContent="4" />
            <Button id="5" click={props.clickAction} textContent="5" />
            <Button id="6" click={props.clickAction} textContent="6" />
            <Button id="7" click={props.clickAction} textContent="7" />
            <Button id="8" click={props.clickAction} textContent="8" />
            <Button id="9" click={props.clickAction} textContent="9" />
            <Button id="10" click={props.clickAction} textContent="10" />
        </div>
    )
}

export default Buttons
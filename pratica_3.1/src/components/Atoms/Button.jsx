const Button = (props) => {
    return <button data-testid="test-button" onClick={props.onAction}>{props.children}</button>
}

export default Button
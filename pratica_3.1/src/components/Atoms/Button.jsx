const Button = (props) => {
    return <button onClick={props.onAction}>{props.children}</button>
}

export default Button
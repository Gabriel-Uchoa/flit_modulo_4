import withHover from "../HOCs/withHover"

const InputItem = (props) => {
    if (props.status) {
        return <input onMouseOver={props.over} onMouseOut={props.out} type={props.type} name={props.name} id={props.id} placeholder="HOVER"/>
    }
    return (
        <input onMouseOver={props.over} onMouseOut={props.out} type={props.type} name={props.name} id={props.id} />
    )
}
export default withHover(InputItem)
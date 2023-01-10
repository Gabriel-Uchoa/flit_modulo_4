import Item from "../atoms/Item"
const ListHistoric = (props) => {
    return (
        <ul>
            {props.values.map(item =>
                <Item keyItem={props.keyItem}>{item}</Item>
            )}
        </ul>
    )
}
export default ListHistoric
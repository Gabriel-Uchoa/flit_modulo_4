import Total from "../atoms/Total"

const Result = (props) => {
    return (
        <div>
            <Total>{props.text}</Total>
        </div>
    )
}

export default Result
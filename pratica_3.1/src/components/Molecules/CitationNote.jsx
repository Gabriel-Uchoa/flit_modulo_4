import Button from "../Atoms/Button"

const CitationNote = (props) => {

    return (
        <div>
            <Button onAction={props.onVote}>1</Button>
            <Button onAction={props.onVote}>2</Button>
            <Button onAction={props.onVote}>3</Button>
            <Button onAction={props.onVote}>4</Button>
            <Button onAction={props.onVote}>5</Button>
            <Button onAction={props.onVote}>6</Button>
            <Button onAction={props.onVote}>7</Button>
            <Button onAction={props.onVote}>8</Button>
            <Button onAction={props.onVote}>9</Button>
            <Button onAction={props.onVote}>10</Button>
        </div>
    )
}

export default CitationNote
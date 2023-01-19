import Span from "../Atoms/Span"
import CitationNote from "./CitationNote"

const CitationCard = (props) => {
    const style = {
        fontSize: "20px",
        margin: "20px",
        border: "solid 1px red",
        padding: "10px"
    }
    return (
        <div style={style}>
            <Span>{props.citation}</Span>
            <br />
            <Span>{props.author} - {props.movie} {props.note}</Span>
            {props.buttons
                ?
                <CitationNote onVote={props.onVote} />
                :
                false
            }
        </div>

    )
}



export default CitationCard
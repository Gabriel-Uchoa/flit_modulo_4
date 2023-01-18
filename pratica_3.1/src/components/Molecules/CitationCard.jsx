import Span from "../Atoms/Span"
import CitationNote from "./CitationNote"

const CitationCard = (props) => {

    return (
        <div>
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
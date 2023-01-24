import styled from "styled-components";
import Span from "../Atoms/Span"
import CitationNote from "./CitationNote"

const CitationCard = (props) => {
    const Div = styled.div`
    font-size: 1.0em;
    text-align: center;
    color: palevioletred;
    padding: 10px;
    margin: 5px;
    border: solid 1px red;
  `;

    return (
        <Div>
            <Span>{props.citation}</Span>
            <br />
            <Span>{props.author} - {props.movie} {props.note}</Span>
            {props.buttons
                ?
                <CitationNote onVote={props.onVote} />
                :
                false
            }
        </Div>

    )
}



export default CitationCard
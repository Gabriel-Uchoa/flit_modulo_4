import { useState } from "react"
import CitationList from "../Organisms/CitationList"
import Welcome from "../Organisms/Welcome"

const QuoteVoting = () => {
    const [Votation, setVotation] = useState(false)

    function handleInitVotation(e) {
        if (!Votation) {
            setVotation(!Votation)
        }
    }
    return (
        <>
            {
                Votation
                    ?
                    <CitationList />
                    :
                    <Welcome onClickInitVote={handleInitVotation} />
            }
        </>
    )
}

export default QuoteVoting
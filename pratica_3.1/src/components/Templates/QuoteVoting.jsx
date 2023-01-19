import axios from "axios"
import { useState } from "react"
import CitationList from "../Organisms/CitationList"
import Welcome from "../Organisms/Welcome"

const QuoteVoting = () => {
    const [Votation, setVotation] = useState(false)
    const [fistLoad, setFistLoad] = useState()


    async function handleInitVotation(e) {
        if (!Votation) {
            const res = await axios.get("https://animechan.vercel.app/api/random")
            setFistLoad(res.data)
            setVotation(!Votation)
        }
    }
    return (
        <>
            {
                Votation
                    ?
                    <CitationList fistLoad={fistLoad} />
                    :
                    <Welcome onClickInitVote={handleInitVotation} />
            }
        </>
    )
}

export default QuoteVoting
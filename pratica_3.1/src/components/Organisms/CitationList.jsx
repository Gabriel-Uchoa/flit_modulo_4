import axios from "axios"
import { useEffect, useState } from "react"
import CitationCard from "../Molecules/CitationCard"
import HistoricItem from "../Molecules/HistoricItem"

const CitationList = (props) => {

    const [Data, setData] = useState(0)
    const [QuoteVoted, setQuoreVoted] = useState([])

    useEffect(() => {
        if (props.fistLoad) {
            setData(props.fistLoad)
        }
    }, [])

    const handleVoteCitation = async (e) => {
        const res = await axios.get("https://animechan.vercel.app/api/random")
        setData(res.data)

        setQuoreVoted(
            QuoteVoted => [
                ...QuoteVoted,
                {
                    "citation": Data.quote,
                    "author": Data.character,
                    "movie": Data.anime,
                    "note": e.target.innerHTML,
                }
            ])
    }

    return (
        <>
            <div>
                <CitationCard
                    citation={Data.quote}
                    author={Data.character}
                    movie={Data.anime}
                    buttons={true}
                    onVote={handleVoteCitation}
                />
            </div>
            <div>
                <HistoricItem data-testid="test-historic-item" value={QuoteVoted} />
            </div>
        </>
    )

}

export default CitationList
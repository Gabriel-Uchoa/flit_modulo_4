import { useEffect, useState } from "react"
import Span from "../Atoms/Span"
import CitationCard from "../Molecules/CitationCard"
import HistoricItem from "../Molecules/HistoricItem"

const Quotes = [
    { "citation": "Citação A", "author": "autor A", "movie": "filme A" },
    { "citation": "Citação B", "author": "autor B", "movie": "filme B" },
    { "citation": "Citação C", "author": "autor C", "movie": "filme C" },
    { "citation": "Citação D", "author": "autor D", "movie": "filme D" },
    { "citation": "Citação E", "author": "autor E", "movie": "filme E" },
    { "citation": "Citação F", "author": "autor F", "movie": "filme F" },
    { "citation": "Citação G", "author": "autor G", "movie": "filme G" },
]

const CitationList = () => {

    const [Count, setCount] = useState(0)
    const [Finished, setFinished] = useState(false)
    const [QuoteVoted, setQuoreVoted] = useState([])

    const handleVoteCitation = (e) => {
        setQuoreVoted(
            QuoteVoted => [
                ...QuoteVoted,
                {
                    "citation": Quotes[Count].citation,
                    "author": Quotes[Count].author,
                    "movie": Quotes[Count].movie,
                    "note": e.target.innerHTML,
                }
            ])
        if (Count < Quotes.length - 1) {
            setCount(Count + 1)
        } else {
            setFinished(!Finished)
        }
    }
    return (
        <>
            <div>
                {Finished
                    ?
                    <Span>Votação Encerrada!</Span>
                    :
                    <CitationCard
                        citation={Quotes[Count].citation}
                        author={Quotes[Count].author}
                        movie={Quotes[Count].movie}
                        buttons={true}
                        onVote={handleVoteCitation}
                    />
                }
            </div>
            <div>
                <HistoricItem value={QuoteVoted} />
            </div>
        </>
    )

}
export default CitationList
import CitationCard from "./CitationCard";

const HistoricItem = (props) => {
    var listOrdened = props.value.sort((a, b) => a.note - b.note).reverse()
    return listOrdened.map((item, index) => {
        return (
            <CitationCard
                key={index}
                citation={item.citation}
                author={item.author}
                movie={item.note}
                buttons={false}
            />
        )
    })

}

export default HistoricItem
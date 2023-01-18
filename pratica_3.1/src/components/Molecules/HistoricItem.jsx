import CitationCard from "./CitationCard";

const HistoricItem = (props) => {
    function compare(a, b) {
        if (a.note > b.note)
            return -1;
        if (a.note < b.note)
            return 1;
        return 0;
    }
    var listOrdened = props.value.sort(compare)
    
    return listOrdened.map(item => {
        return (
            <CitationCard
                citation={item.citation}
                author={item.author}
                movie={item.note}
                buttons={false}
            />
        )
    })

}

export default HistoricItem
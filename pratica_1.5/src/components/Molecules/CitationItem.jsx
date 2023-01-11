const CitationItem = (props) => {
    return (
        <>
            <p>{props.citationText}</p>
            <p>{props.author} - {props.movie}</p>
           
        </>
    )
}

export default CitationItem
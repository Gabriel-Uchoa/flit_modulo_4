function History(props) {
    return (
        <>
            <ul>
                {props.values.map(item =>
                    <li key={item}>{item}</li>
                )}
            </ul>
        </>

    )
}
export default History
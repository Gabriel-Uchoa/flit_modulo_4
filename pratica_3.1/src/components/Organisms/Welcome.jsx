import Card from "../Molecules/Card"

const Welcome = (props) => {
    return (
        <div>
            <Card onClickInitVote={props.onClickInitVote} />
        </div>

    )
}

export default Welcome
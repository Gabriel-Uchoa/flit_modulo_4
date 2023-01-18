import Span from "../Atoms/Span"
import Button from "../Atoms/Button"

const Card = (props) => {
    return (
        <div>
            <Span>Seja Bem vindo</Span>
            <br />
            <Button onAction={props.onClickInitVote}>Iniciar Votação</Button>
        </div>
    )
}

export default Card
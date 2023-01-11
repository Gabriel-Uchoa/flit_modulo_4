import Button from "../Atoms/Button"
import Title from "../Atoms/Title"

const WelcomeCard = (props) => {
    return (
        <div>
            <Title textContent="Seja Bem Vindo" />
            <Button click={props.clickAction} textContent="Iniciar Votação" />
        </div>
    )
}

export default WelcomeCard
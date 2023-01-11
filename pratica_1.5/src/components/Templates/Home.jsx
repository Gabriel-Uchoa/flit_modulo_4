import { useState } from "react"
import ListSection from "../Organisms/ListSection"
import WelcomeSection from "../Organisms/WelcomeSection"

const Home = () => {

    const [statusVote, setStatusVote] = useState(false)

    const handleClick = () => {
        setStatusVote(true)
    }

    if (statusVote) {
        return <ListSection />
    } else {
        return <WelcomeSection clickFunction={handleClick} />
    }
}

export default Home
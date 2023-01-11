import { useState } from "react"
import WelcomeCard from "../Molecules/WelcomeCard"

const WelcomeSection = (props) => {

    return (
        <div>
            <WelcomeCard clickAction={props.clickFunction}/>
        </div>
    )
}

export default WelcomeSection
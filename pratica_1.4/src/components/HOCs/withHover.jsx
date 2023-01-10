import { useState } from "react";

const withHover = (Component) => {
    const WithHover = (props) => {
        const [status, setStatus] = useState(false)
        const handleMouseOver = () => {
            setStatus(true)
        }

        const handleMouseOut = () => {
            setStatus(false)
        }

        return <Component {...props} over={handleMouseOver} out={handleMouseOut} status={status}/>
    }

    return WithHover
}

export default withHover
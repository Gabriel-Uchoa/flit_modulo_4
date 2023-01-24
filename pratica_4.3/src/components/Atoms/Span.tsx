import { PropsWithChildren } from "react"
import styled from "styled-components"

const Span = (props: PropsWithChildren) => {
    const Span = styled.span`
        display: block;
    `

    return <Span>{props.children}</Span>
}

export default Span
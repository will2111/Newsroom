import { Container } from "react-bootstrap"

function Hover(props) {

    const { children,grow } = props

    return (
        <Container className={"grow"+grow+" fit p-0 m-0"}>
            {children}
        </Container>
    )
}

export default Hover
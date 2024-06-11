import { Nav, Button } from 'react-bootstrap';

export default function NavButton(props) {
    return (
        <Nav.Item as={Button} variant="transparent" className='fs-5 text-dark border-0' > {props.name}</Nav.Item>
    )
}
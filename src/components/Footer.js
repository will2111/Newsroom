import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import $ from 'jquery'

export default function Footer(props) {

    $('.width').width(props.width)
    $('.heigth').height(props.heigth)

    return (
        props.width && (

            <Container className='width heigth' />
            
        )
        
    )

}

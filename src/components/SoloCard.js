import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import Moment from 'react-moment';
import { Button, Stack } from 'react-bootstrap';

import Switch_Api from './Switch_Api';


function SoloCard(props) {

const img = Switch_Api() ? props.obj.image : props.obj.urlToImage  

  return (


    <Card as={Button} href={props.obj.url} className='shadow p-0 text-start rounded-0 border-0' variant="light">
        
        <Row>

      {img && img !== "None"  && (
        <Col className='p-0'>

        <Card.Img variant="top" className='rounded-0' src={img} />
        </Col>

      )}


      <Col className='p-0'>
     

      <Card.Body className='p-5' fluid>
      <Stack gap={3}>

        <Card.Title className='noticia fs-4' >{props.obj.title}</Card.Title>

        <Card.Text className='crop-text-2' >
          {props.obj.description}
        </Card.Text>

        
        <Row>
          <Col md="auto">
            <Card.Text className='fw-600'>
              {props.obj.source.name}
            </Card.Text>
          </Col>

          <Col md="auto" className="vl p-0" />

          <Col md="auto">
            <Card.Text >
              <Moment date={props.obj.publishedAt} format="D MMMM YYYY"/>
            </Card.Text>
          </Col>
          </Row>

          </Stack>
      </Card.Body>
      </Col>

      </Row>

    </Card>

  )
}

export default SoloCard;
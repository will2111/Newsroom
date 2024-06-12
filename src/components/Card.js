import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import Moment from 'react-moment';
import { Button } from 'react-bootstrap';


function NewsCard(props) {

  return (


    <Card as={Button} href={props.obj.url} className='shadow p-0 text-start rounded-0 border-0' variant="light">

      {props.obj.urlToImage && props.obj.urlToImage !== "None"  && (

        <Card.Img variant="top" className='rounded-0' src={props.obj.urlToImage} />

      )}

      <Card.Body>

        <Card.Title className='noticia fs-4 py-1' >{props.obj.title}</Card.Title>

        <Card.Text className='crop-text-2' >
          {props.obj.description}
        </Card.Text>

        <Row >

          <Col md="auto">
            <Card.Text className='fw-600'>
              {props.obj.author}
            </Card.Text>
          </Col>

          <Col md="auto" className="vl p-0" />

          <Col md="auto">
            <Card.Text >
              <Moment date={props.obj.publishedAt} format="D MMMM YYYY"/>
            </Card.Text>
          </Col>

        </Row>

      </Card.Body>

    </Card>


  )
}

export default NewsCard;
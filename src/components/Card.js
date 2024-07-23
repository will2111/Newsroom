import Collapse from 'react-bootstrap/Collapse';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import Moment from 'react-moment';
import { Button, Fade } from 'react-bootstrap';

import Switch_Api from './Switch_Api.js';
import $ from 'jquery';
import { useState } from 'react';
import Hover from './utils/Hover.js';




function NewsCard(props) {

  const img = Switch_Api() ? props.obj.image : props.obj.urlToImage


  $(window).height(props.height)
  $(window).width(props.width)


  return (

    <Hover grow={""}>

      <Fade className="white" in={!props.open}>
        <Card style={{ backgroundColor: "#fff" }} id={props.id ? props.id : "ToDEF"} as={Button} href={props.obj.url} className='shadow_card p-0 text-start rounded-0 border-0' variant="light">

          {img && img !== "None" && (

            <Card.Img variant="top" className='rounded-0' src={img} />

          )}

          <Card.Body>

            <Card.Title className='fs-4 py-1' >{props.obj.title.toUpperCase()}</Card.Title>

            <Card.Text className='crop-text-2' >
              {props.obj.description}
            </Card.Text>

            <Row >

              <Col md="auto">
                <Card.Text className='fw-600'>
                  {props.obj.source}
                </Card.Text>
              </Col>

              <Col md="auto" className="vl p-0" />

              <Col md="auto">
                <Card.Text >
                  <Moment date={props.obj.PublishedAt} format="D MMMM YYYY" />
                </Card.Text>
              </Col>

            </Row>

          </Card.Body>

        </Card>
      </Fade>
    </Hover>


  )
}

export default NewsCard;
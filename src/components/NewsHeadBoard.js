import React from 'react';

import NewsCard from './Card.js';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

import Switch_Api from './Switch_Api.js';

export default function NewsHeadBoard(props) {

    const { articles } = props;
    const img = Switch_Api() ? "image" : "urlToImage"

    return (
        <Col className='px-0 pt-4' md={"auto"} >

            <Row gap={4}>
                <Col xs={6} md={5}>

                    <NewsCard obj={articles[0]} />

                </Col>
                <Col gap xs={6} md={2} className='align-self-center'>
                    <Card as={Button} href={articles[6].url} className='shadow p-0 mb-4 text-start rounded-0 border-0' variant="light">

                        {articles[6][img] && articles[6][img] !== "None" && (

                            <Card.Img variant="top" className='rounded-0' src={articles[6][img]} />
                        )}
                    </Card>
                    <Card as={Button} href={articles[5].url} className='shadow p-0 mb-4 text-start rounded-0 border-0' variant="light">

                        {articles[5][img] && articles[5][img] !== "None" && (

                            <Card.Img variant="top" className='rounded-0' src={articles[5][img]} />
                        )}
                    </Card>

                    <Card as={Button} href={articles[1].url} className='shadow p-0 text-start rounded-0 border-0' variant="light">

                        {articles[1][img] && articles[1][img] !== "None" && (

                            <Card.Img variant="top" className='rounded-0' src={articles[1][img]} />
                        )}

                    </Card>

                </Col>
                <Col xs={6} md={5}>
                    {articles && (
                        <NewsCard obj={articles[8]} />
                    )}
                </Col>
            </Row>

        </Col>
    );

}
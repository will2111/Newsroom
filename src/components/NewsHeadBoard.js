import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';

import NewsCard from './Card.js';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

export default function NewsHeadBoard() {

    const { isLoading, error, data, status } = useQuery('ad3aa392a85b4007a3d4c225c5c6177e', () =>
        fetch('https://newsapi.org/v2/everything?q=palestine&pageSize=10&apiKey=ad3aa392a85b4007a3d4c225c5c6177e').then(res =>
            res.json()
        )
    );

    

    if (isLoading) return <p>Loading...</p>;

    if (error) return <p>An error has occurred: {error.message}</p>;

    const { articles } = data;
    console.log(articles);

    return (
        <Col className='px-0 pt-4' md={"auto"} >

            <Row gap={4}>
                <Col xs={6} md={5}>

                    <NewsCard obj={articles[0]} />

                </Col>
                <Col gap xs={6} md={2} className='align-self-center'>
                    <Card as={Button} href={articles[6].url} className='shadow p-0 mb-4 text-start rounded-0 border-0' variant="light">

                        {articles[6].urlToImage && articles[6].urlToImage !== "None" && (

                            <Card.Img variant="top" className='rounded-0' src={articles[6].urlToImage} />
                        )}
                    </Card>
                    <Card as={Button} href={articles[5].url} className='shadow p-0 mb-4 text-start rounded-0 border-0' variant="light">

                        {articles[5].urlToImage && articles[5].urlToImage !== "None" && (

                            <Card.Img variant="top" className='rounded-0' src={articles[5].urlToImage} />
                        )}
                    </Card>

                    <Card as={Button} href={articles[1].url} className='shadow p-0 text-start rounded-0 border-0' variant="light">

                        {articles[1].urlToImage && articles[1].urlToImage !== "None" && (

                            <Card.Img variant="top" className='rounded-0' src={articles[1].urlToImage} />
                        )}

                    </Card>

                </Col>
                <Col xs={6} md={5}>
                    {articles && (
                        <NewsCard obj={articles[2]} />
                    )}
                </Col>
            </Row>

        </Col>
    );

}
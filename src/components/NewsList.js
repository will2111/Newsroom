import React, { useEffect, useState } from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Stackcard from './Stack_card.js';
import { Button, Container } from 'react-bootstrap';
import { Collapse } from '@mui/material';
import { ArrowLeft, ArrowRight, ArrowUp } from 'react-bootstrap-icons';
import Hover from './utils/Hover.js';

/*
"source": {
"id": "google-news",
"name": "Google News"
},
"author": "Reuters",
"title": "D-Day anniversary 2024: World leaders, veterans, commemorate Normandy landings - Reuters",
"description": null,
"url": "https://news.google.com/rss/articles/CBMidGh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3dvcmxkL2V1cm9wZS93b3JsZC1sZWFkZXJzLXZldGVyYW5zLWNvbW1lbW9yYXRlLWQtZGF5cy04MHRoLWFubml2ZXJzYXJ5LW5vcm1hbmR5LTIwMjQtMDYtMDYv0gEA?oc=5",
"urlToImage": null,
"publishedAt": "2024-06-06T10:15:12Z",
"content": null 
 */

function NewsList(props) {

    const { articles, nbline, title } = props
    const [open, setOpen] = useState(props.open);

    useEffect(() => {
        setOpen(props.open)
    
      }, [props.open])

    return (

        <Col className='pt-4' >

            <Hover grow={open ? "_dis" : "_image"}>

                <Container className='p-0' style={{ backgroundColor: "rgba(0,0,0,0)", borderWidth: 0 }} as={Button} onClick={() => setOpen(!open)} aria-controls="collapse-carousel" >

                    <Row className='title_bar p-3 m-0' style={{ width: "100%", borderWidth: 2, borderRadius: 8, borderBottomLeftRadius: open ? 0 : 8, borderBottomRightRadius: open ? 0 : 8, borderStyle: "solid", borderColor: "#FFF", flexDirection: "row", alignItems: "center" }} >

                        <Col className='p-0' style={{ alignItems: "flex-start" }} >
                            <h1 style={{ textAlign: "left" }} className='title_col fw-600 m-0'>{title}</h1>
                        </Col>

                        <Col className='p-0' style={{ alignItems: "flex-end" }}>
                            <Row className='m-0' style={{ justifyContent: "flex-end" }} >


                                <Col md={"auto"} className='p-0 me-2' >
                                    <Hover grow={"_button"}>
                                        <Container style={{ borderRadius: 4 }} className='p-2 fit button_color' >
                                            <ArrowLeft size={24} className='icon_color' />
                                        </Container>
                                    </Hover>
                                </Col>



                                <Col md={"auto"} className='p-0 mx-2' >
                                    <Hover grow={"_button"}>
                                        <Container style={{ borderRadius: 4 }} className='p-2 fit button_color' >
                                            <ArrowRight size={24} className='icon_color' />
                                        </Container>
                                    </Hover>
                                </Col>

                                <Col md={"auto"} className='p-0 ms-2'>
                                    <Hover grow={"_button"}>
                                        <Container
                                            as={Button}
                                            style={{backgroundColor: "rgba(0,0,0,0)", borderRadius: 4 }}
                                            aria-expanded={open}
                                            className='p-2 fit button_color'

                                            onClick={() => setOpen(!open)}
                                            aria-controls="collapse-carousel"
                                        >
                                            <ArrowUp size={24} className='icon_color' />
                                        </Container>
                                    </Hover>
                                </Col>

                            </Row>
                        </Col>

                    </Row>
                </Container>

                <Collapse
                    in={open}
                    timeout={800}
                    style={{ backgroundColor: "#e9ecef" }}
                >

                    <Row xs={1} md={3} className='g-3 px-3 pb-3' >


                        {Array.from({ length: 3 }).map((_, idx) => (
                            <Col key={idx}>
                                <Stackcard nbline={nbline} articles={articles.filter((_, index) => index % 3 === idx)} i_line={idx} />
                            </Col>
                        )
                        )}


                    </Row>
                </Collapse>
            </Hover>

        </Col>


    )
}

export default NewsList;
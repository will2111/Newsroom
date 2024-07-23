import React, { useEffect, useState } from 'react';

import NewsCard from './Card.js';
import Footer from './Footer.js';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Card from 'react-bootstrap/Card';
import { Button, Carousel, Container } from 'react-bootstrap';
import Collapse from '@mui/material/Collapse';
import { Grow } from '@mui/material';

import Switch_Api from './Switch_Api.js';
import get_Dim_by_ID from './utils.js';
import { ArrowLeft, ArrowRight, ArrowUp } from 'react-bootstrap-icons';
import Hover from './utils/Hover.js';
import VideoPlayer from './utils/VideoPlayer.js';


export default function NewsHeadBoard(props) {

    const { articles, mode } = props;
    const [NHB_list, setNHB] = useState(articles.slice(0, 5))
    const [open, setOpen] = useState(true)
    const [appearI, setAppearI] = useState(0)
    const img = Switch_Api() ? "image" : "urlToImage"



    const [Dimensions, setDimensions] = useState(null)
    const [listOpen1, setListOpen1] = useState(false)
    const [listOpen2, setListOpen2] = useState(false)


    useEffect(() => {

        var left_elem = document.getElementById("left_head")
        var left_dim = left_elem ? get_Dim_by_ID(left_elem) : null;


        var right_elem = document.getElementById("right_head")
        var right_dim = right_elem ? get_Dim_by_ID(right_elem) : null;

        function _handle_Footer(dim_1, dim_2) {

            var dim1_heigth = dim_1.heigth
            var dim1_width = dim_1.width

            var dim2_heigth = dim_2.heigth


            var isdim_1 = dim1_heigth > dim2_heigth

            var result = { "width": dim1_width, "heigth": isdim_1 ? dim1_heigth - dim2_heigth : dim2_heigth - dim1_heigth }


            return { "dim": result, "isFooter": isdim_1 }
        }


        if (left_dim) {
            setDimensions(_handle_Footer(left_dim, right_dim))
        }

    }, [])

    function setListOpen(index, bool) {
        return index ? setListOpen2(bool) : setListOpen1(bool)
    }

    function UpdateNHB(idx) {
        const idy = idx % 2 === 0 ? 4 : 0
        const id_swipe = idx % 2 === 0 ? 1 : 0
        const obj_idy = articles[idy]
        articles.splice(idy, 1, articles[idx])
        articles.splice(idx, 1, obj_idy)
        setListOpen(id_swipe, true)
        setTimeout(() => {
            setNHB(articles.slice(0, 5));
            setListOpen(id_swipe, false)
        }, "500");
    }


    console.log(mode === "Articles")

    return (

        <Container style={{ flex: 1, height: "100%" }} className='p-0 text-start rounded-0'>

            <Row className='p-3' style={{ borderBottomWidth: 1, borderStyle: "solid", borderColor: "#FFF", flexDirection: "row", alignItems: "center" }} >

                <Col className='p-0 fit' style={{ alignItems: "flex-start" }} >
                    <h1 style={{ color: "#FFF" }} className='fw-600'>HEADBOARD</h1>
                </Col>

                <Col className='p-0' style={{ alignItems: "flex-end" }}>
                    <Row className='m-0' style={{ justifyContent: "flex-end" }} >


                        <Col md={"auto"} className='p-0 me-2' >
                            <Hover grow={"_button"}>
                                <Container className='p-2 fit button_color' >
                                    <ArrowLeft size={24} className='icon_color' />
                                </Container>
                            </Hover>
                        </Col>



                        <Col md={"auto"} className='p-0 mx-2' >
                            <Hover grow={"_button"}>
                                <Container className='p-2 fit button_color' >
                                    <ArrowRight size={24} className='icon_color' />
                                </Container>
                            </Hover>
                        </Col>

                        <Col md={"auto"} className='p-0 ms-2'>
                            <Hover grow={"_button"}>
                                <Container
                                    as={Button}
                                    style={{ backgroundColor: "rgba(0,0,0,0)" }}
                                    aria-expanded={open}
                                    className='p-2 fit rounded-0 button_color'

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

            <Collapse in={open} style={{ height: "100%" }} timeout={500}>

                <Container style={{ height: "100%" }} className='p-0'>

                    {mode == "Articles" && (
                        <Row className='p-4' gap={4}>

                            <Col Col className='p-0' xs={6} md={5}>

                                <NewsCard open={listOpen1} id={"left_head"} obj={NHB_list[0]} />

                                {/*false && Dimensions && Dimensions.isFooter && (
                            <Col className='pt-4'>
                                <Footer width={Dimensions.dim.width} heigth={Dimensions.dim.heigth} />
                             </Col>
                            )*/}

                            </Col>

                            <Col gap xs={6} md={2} className='align-self-center'>
                                <Card as={Button} onClick={() => UpdateNHB(1)} className='shadow p-0 mb-4 text-start rounded-0 border-0' variant="light">

                                    {NHB_list[1][img] && NHB_list[1][img] !== "None" && (

                                        <Card.Img variant="top" className='rounded-0' src={NHB_list[1][img]} />
                                    )}
                                </Card>
                                <Card as={Button} onClick={() => UpdateNHB(2)} className='shadow p-0 mb-4 text-start rounded-0 border-0' variant="light">

                                    {NHB_list[2][img] && NHB_list[2][img] !== "None" && (

                                        <Card.Img variant="top" className='rounded-0' src={NHB_list[2][img]} />
                                    )}
                                </Card>

                                <Card as={Button} onClick={() => UpdateNHB(3)} className='shadow p-0 text-start rounded-0 border-0' variant="light">

                                    {NHB_list[3][img] && NHB_list[3][img] !== "None" && (

                                        <Card.Img variant="top" className='rounded-0' src={NHB_list[3][img]} />
                                    )}

                                </Card>

                            </Col>

                            <Col Col className='p-0' xs={6} md={5}>

                                <NewsCard open={listOpen2} id={"right_head"} obj={NHB_list[4]} />

                                {/*false && Dimensions && Dimensions.isFooter && (
                         <Col className='pt-4'>
                             <Footer width={Dimensions.dim.width} heigth={Dimensions.dim.heigth} />
                         </Col>
                     )*/}

                            </Col>

                        </Row>


                    )}

                    {mode == "Youtube" && (
                        <Row style={{ height: "80%" }} gap={4}>

                            <Carousel className='shadow py-4' style={{ width: "100%" }} onSelect={(eventKey) => setAppearI(eventKey)}>
                                {articles.slice(0, 5).map((article, index) => {
                                    return (
                                        <Carousel.Item style={{ height: "100%" }}>

                                            <Grow in={appearI == index} timeout={400} style={{ height: "100%" }} >
                                                <Container className='p-0' style={{ height: "100%" }}>
                                                    <Container className='px-2' style={{ width: "100%", aspectRatio: 1.9, overflow: "hidden" }}>
                                                        {/*  <img style={{ width: "100%" }} src={article[img]} className='d-block' alt="Responsive image"></img>*/}
                                                        <VideoPlayer videoId={article.videoId} />
                                                    </Container>
                                                </Container>

                                            </Grow>


                                        </Carousel.Item>
                                    )
                                }
                                )}

                            </Carousel>

                        </Row>


                    )}
                </Container>

            </Collapse>




        </Container>
    );

}
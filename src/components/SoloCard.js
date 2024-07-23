import { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Carousel, Container, Stack } from 'react-bootstrap';
import { ArrowLeft, ArrowRight, ArrowUp, Youtube, Newspaper, Heart } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import Collapse from '@mui/material/Collapse';
import Hover from './utils/Hover';
import VideoPlayer from './utils/VideoPlayer';
import { Grow } from '@mui/material';
import Moment from 'react-moment';



function SoloCard(props) {

  const { data, title } = props


  const [open, setOpen] = useState(props.open);
  const [appearI, setAppearI] = useState(0)
  const [mode, setMode] = useState(props.mode)
  const articles = data[mode]
  const img = mode === "Articles" ? "urlToImage" : "thumbnail"

  useEffect(() => {
    setOpen(props.open)

  }, [props.open])

  return (


    <Container style={{ flex: 1, height: "100%" }} className='px-4'>

      <Hover grow={open ? "_dis" : "_image"}>
        
        <Container className='p-0' style={{ backgroundColor: "rgba(0,0,0,0)", borderWidth: 0 }} as={Button} onClick={() => setOpen(!open)} aria-controls="collapse-carousel" >

          <Row className='title_bar p-3 m-0' style={{ width: "100%", borderWidth: 2.5, borderRadius: 8, borderBottomLeftRadius: open ? 0 : 8, borderBottomRightRadius: open ? 0 : 8, borderStyle: "solid", borderColor: "#FFF", flexDirection: "row", alignItems: "center" }} >

            <Col className='p-0' style={{ alignItems: "flex-start" }} >
              <h1 className='fw-600 fit m-0'>{title}</h1>
            </Col>

            <Col className='p-0' style={{ alignItems: "flex-end" }}>
              <Row className='m-0' style={{ justifyContent: "flex-end" }} >


                <Col md={"auto"} className='p-0 me-2' >
                  <Hover grow={"_button"}>
                    <Container
                      as={Button}
                      style={{ backgroundColor: "rgba(0,0,0,0)", borderRadius: 4, zIndex: 10 }}
                      aria-expanded={open}
                      className='p-2 fit  button_color'

                      onClick={() => setMode("Youtube")}
                      aria-controls="collapse-carousel"
                    >
                      <Youtube size={24} className='icon_color' />
                    </Container>
                  </Hover>
                </Col>



                <Col md={"auto"} className='p-0 mx-2' >
                  <Hover grow={"_button"}>
                    <Container
                      as={Button}
                      style={{ backgroundColor: "rgba(0,0,0,0)", borderRadius: 4 }}
                      aria-expanded={open}
                      className='p-2 fit  button_color'

                      onClick={() => setMode("Articles")}
                      aria-controls="collapse-carousel"
                    >
                      <Newspaper size={24} className='icon_color' />
                    </Container>
                  </Hover>
                </Col>

                <Col md={"auto"} className='p-0 ms-2'>
                  <Hover grow={"_button"}>
                    <Container
                      as={Button}
                      style={{ backgroundColor: "rgba(0,0,0,0)", borderRadius: 4 }}
                      aria-expanded={open}
                      className='p-2 fit  button_color'

                      onClick={() => setOpen(!open)}
                      aria-controls="collapse-carousel"
                    >
                      <ArrowUp size={24} className='icon_color'  />
                    </Container>
                  </Hover>
                </Col>

              </Row>
            </Col>

          </Row>
        </Container>

        <Collapse className='m-0' in={open} timeout={500} style={{ backgroundColor: "#e9ecef" }} >

          <Container className="p-0" id="collapse-carousel" style={{ width: "100%", height: "87%" }}>
            <Carousel controls={false} interval={null} className='p-0' style={{ width: "100%" }} onSelect={(eventKey) => setAppearI(eventKey)}>
              {articles.slice(0, 5).map((article, index) =>
                <Carousel.Item>

                  <Grow in={appearI == index} timeout={400} style={{ height: "100%" }} >

                    <Container className='p-0' style={{ height: "100%" }}>
                      <Container className='p-3' style={{ width: "100%", aspectRatio: 1.65, overflow: "hidden" }}>

                        {mode === "Articles" && (

                          <img style={{ width: "100%", height: "100%" }} src={article[img]} className='shadow_img d-block' ></img>

                        )}

                        {mode === "Articles" && (
                          <Container className="p-3" style={{ position: "absolute", top: 0, left: 0, width: "100%", aspectRatio: 1.65, backgroundColor: "rgba(0,0,0,0)" }} >

                            <Container className="m-0 p-0 hover_img" style={{ width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,0.5)" }}>

                              <Container style={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between" }} className='p-4'>
                                <Container className='m-0 p-0' style={{ width: "80%" }}>
                                  <h2 style={{ color: "#FFF" }} className='fw-600 m-0'>
                                    {article.title}
                                  </h2>
                                  <Row className='pt-3' >

                                    <Col md="auto">
                                      <h6 className='fw-700' style={{ color: "#FFF" }} >
                                        {article.source}
                                      </h6>
                                    </Col>

                                    <Col md="auto" className="vl p-0" style={{ backgroundColor: "#FFF" }} />

                                    <Col md="auto">
                                      <h6 style={{ color: "#FFF" }} >
                                        <Moment date={article.PublishedAt} format="D MMMM YYYY" />
                                      </h6>
                                    </Col>

                                  </Row>
                                </Container>
                                <Container className='m-0 p-0 pt-3' style={{ width: "70%" }}>
                                  <h5 style={{ color: "rgba(255,255,255,0.7)" }} >
                                    {article.description}
                                  </h5>
                                </Container>
                                <Container className='m-0 p-0 pt-3'>
                                  <Col style={{ display: "flex"}} className='p-0 mt-4 fit'  >
                                    
                                    <Container className='p-0' style={{ display: "flex" }} >
                                      <Hover grow={"_button"}>
                                        <Row style={{ color: "#FFF", borderRadius: 4, borderWidth: 1.5, borderStyle: "solid", borderColor: "#FFF"}} className='p-3 fit m-0 bor_2 bor_c'  >

                                          <Col className='p-0' md={"auto"}>
                                            <div className='p-0'>
                                              <h6 className='pb-0 m-0'>
                                                Like
                                              </h6>
                                            </div>
                                          </Col>


                                          <Col className='p-0 ms-3' md={"auto"}>
                                            <Heart size={20} className='icon_color' />
                                          </Col>

                                        </Row>
                                      </Hover>
                                    </Container>


                                    <Container as={Button} href={article.url} className='p-0 m-0' style={{  backgroundColor: "rgba(0,0,0,0)", borderWidth: 0 }} >
                                      <Hover grow={"_button"}>
                                        <Row style={{ color: "#000", backgroundColor: "#e9ecef", borderRadius: 4, borderWidth: 1.5, borderStyle: "solid", borderColor: "#FFF" }} className='p-3 m-0'  >

                                          <Col className='p-0' md={"auto"}>
                                            <div className='p-0'>
                                              <h6 className='pb-0 fw-600 m-0'>
                                                Go To Link
                                              </h6>
                                            </div>
                                          </Col>

                                          <Col className='p-0 ms-3' md={"auto"}>
                                            <ArrowRight size={20} />
                                          </Col>

                                        </Row>
                                      </Hover>
                                    </Container>

                                  </Col>
                                </Container>
                              </Container>

                            </Container>
                          </Container>

                        )}

                        {mode === "Youtube" && (
                          <Container className='p-0' style={{ width: "100%", height: "100%" }}>
                            <VideoPlayer videoId={article.videoId} />
                          </Container>

                        )}


                      </Container>

                    </Container>

                  </Grow>

                </Carousel.Item>
              )}

            </Carousel>
          </Container>


        </Collapse>
      </Hover>

    </Container>

  )
}

export default SoloCard;
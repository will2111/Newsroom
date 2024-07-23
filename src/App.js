
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { useState, useEffect } from 'react';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


import Nav_card from './components/Nav_card.js';
import NewsHeadBoard from './components/NewsHeadBoard.js';
import NewsList from './components/NewsList.js';
import SoloCard from './components/SoloCard.js';
import { ArrowBarLeft, ArrowRight, Newspaper, Twitter, Youtube } from 'react-bootstrap-icons';
import Hover from './components/utils/Hover.js';
import { Button } from 'react-bootstrap';


function App() {


  const [open, setOpen] = useState(false);
  const [articles, setArticles] = useState([]);
  const [youtube, setYoutube] = useState([])

  // Using useEffect for single rendering

  useEffect(() => {
    // Using fetch to fetch the api from 
    // flask server it will be redirected to proxy
    fetch("http://192.168.1.24:5000/Articles").then((res) =>
      res.json().then((data) => {
        // Setting a data from api
        const dupe = data
        setArticles(dupe.reverse())

      })
    );

    fetch("http://192.168.1.24:5000/Youtube").then((res) =>
      res.json().then((data) => {
        // Setting a data from api
        const dupe = data
        setYoutube(dupe.reverse())

      })
    );
  }, []);



  return (

    articles.length > 0 && (

      <Container className='p-0 bg_main' fluid>

        <Container className='p-0 m-0' fluid>

          <Container className="p-0" style={{ zIndex: 0, position: "fixed", top: 0, width: "76%", height: "100%" }}>
            <img style={{ width: "100%", height: "100%" }} src="https://st.depositphotos.com/1032463/1373/i/950/depositphotos_13732950-stock-photo-background-of-old-vintage-newspapers.jpg" class="img-fluid" alt="Responsive image"></img>
            <Container className="p-0" style={{ position: "absolute", top: 0, width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,0.6)" }} />
          </Container>


          <Container className='h-75 p-0 m-0' style={{ position: "relative", zIndex: 10 }} fluid >


            <Col className='p-0 pb-4' md={9} >


              <Container className="vh-100 p-0" style={{ width: "100%", backgroundColor: "rgba(0,0,0,0)" }} >


                <Container className="p-0" style={{ height: "100%", zIndex: 10 }}>

                  <Col style={{ display: "flex", width: "100%" }} className='p-0 px-4 mt-4'  >

                    <Container className='p-0' style={{ display: "flex", flex: 1, alignItems: "center", justifyContent: "flex-start" }} >
                      <Hover grow={"_button"}>
                        <Row style={{ color: "#FFF", borderRadius: 4, borderWidth: 1.5, borderStyle: "solid", borderColor: "#FFF", alignSelf: "center" }} className='p-3 fit m-0 bor_2 bor_c'  >

                          <Col className='p-0 me-2' md={"auto"}>
                            <Youtube size={24} className='icon_color' />
                          </Col>


                          <Col className='p-0' md={"auto"}>
                            <div className='p-0'>
                              <h5 className='pb-0 m-0'>
                                YouTube
                              </h5>
                            </div>
                          </Col>

                        </Row>
                      </Hover>
                    </Container>


                    <Container className='p-0' style={{ display: "flex", flex: 1, alignItems: "center", justifyContent: "center" }} >
                      <Hover grow={"_button"}>
                        <Row style={{ backgroundColor: "#e9ecef" ,borderRadius: 4}} className='p-3 fit m-0 bor_2 bor_c'  >

                          <Col className='p-0 me-2' md={"auto"}>
                            <Newspaper size={24} />
                          </Col>


                          <Col style={{ alignContent: "center" }} className='p-0' md={"auto"}>
                            <div className='p-0'>
                              <h5 className='pb-0 fw-600 m-0'>
                                NewsBoard
                              </h5>
                            </div>
                          </Col>

                        </Row>
                      </Hover>
                    </Container>



                    <Container className='p-0' style={{ display: "flex", flex: 1, alignItems: "center", justifyContent: "flex-end" }} >

                      <Hover grow={"_button"}>
                        <Row style={{ color: "#FFF", borderRadius: 4, borderWidth: 1.5, borderStyle: "solid", borderColor: "#FFF" }} className='p-3 fit m-0 bor_2 bor_c'  >

                          <Col className='p-0 me-2' md={"auto"}>
                            <Twitter size={24} className='icon_color' />
                          </Col>

                          <Col style={{ alignContent: "center" }} className='p-0' md={"auto"}>
                            <div className='p-0'>
                              <h5 className='pb-0 m-0'>
                                TwitTer
                              </h5>
                            </div>
                          </Col>

                        </Row>
                      </Hover>

                    </Container>


                  </Col>



                  <Container className='px-4 pb-3' style={{ height: "86%", overflow: "hidden", alignContent: "center", zIndex: 10 }}>

                    <Container className='p-0' style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

                      <Col className='p-0' >
                        <h2 style={{ color: "#FFF", textAlign: "center" }} >It's time to amplify</h2>
                      </Col>

                      <Col className='p-0 mb-3'>
                        <h1 style={{ color: "#FFF", textAlign: "center" }} className='fw-600'>your online business</h1>
                      </Col>

                      <Col className='p-0' style={{ width: "80%", alignSelf: "100%" }}>
                        <h5 style={{ color: "rgba(255,255,255,0.6)", textAlign: "center" }} >
                          Raino is a HTML5 template based on Sass and Bootstrap 4 with modern and creative multipurpose design you can use it as a startups.
                        </h5>
                      </Col>

                      <Col style={{ display: "flex", width: "32%" }} className='p-0 mt-4'  >

                        <Container as={Button} onClick={()=>setOpen(!open)} className='p-0' style={{ display: "flex", flex: 1, alignItems: "center", justifyContent: "center",backgroundColor:"rgba(0,0,0,0)",borderWidth:0 }} >
                          <Hover grow={"_button"}>
                            <Row style={{ color: "#FFF", borderRadius: 4, borderWidth: 1.5, borderStyle: "solid", borderColor: "#FFF", alignSelf: "center" }} className='p-3 fit m-0 bor_2 bor_c'  >



                              <Col className='p-0' md={"auto"}>
                                <div className='p-0'>
                                  <h6 className='pb-0 m-0'>
                                    Open All
                                  </h6>
                                </div>
                              </Col>


                              <Col className='p-0 ms-3' md={"auto"}>
                                <ArrowRight size={20} className='icon_color' />
                              </Col>

                            </Row>
                          </Hover>
                        </Container>


                        <Container className='p-0' style={{ display: "flex", flex: 1, alignItems: "center", justifyContent: "center" }} >
                          <Hover grow={"_button"}>
                            <Row style={{ color: "#000", backgroundColor: "#e9ecef", borderRadius: 4, borderWidth: 1.5, borderStyle: "solid", borderColor: "#FFF", alignSelf: "center" }} className='p-3 fit m-0'  >

                              <Col className='p-0' md={"auto"}>
                                <div className='p-0'>
                                  <h6 className='pb-0 fw-600 m-0'>
                                    NewsBoard
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



              <Container className="px-0 pb-4" style={{ width: "100%", height: "100%", alignItems: "center" }} >
                <SoloCard title={"Politics"} mode={"Articles"} open={open} data={{ "Articles": articles, "Youtube": youtube.filter((item)=>item.category == "Politics") }} />
              </Container>

              <Col style={{ width: "100%" }}>

                <Container className='m-0 p-0' style={{ height: "86%", width: "100%", alignItems: "center" }} >
                  <SoloCard title={"Technology"} mode={"Youtube"} open={open} data={{ "Articles": articles.filter((item)=>item.category == "Technology").slice(5, 10), "Youtube": youtube.filter((item)=>item.category == "Technology").slice(5, 10) }} />
                </Container>

              </Col>


              <Col className='px-4'>
                <NewsList title={"Entertaiment"} articles={articles} open={open} nbline={3} />
              </Col>

              <Col className='px-4'>
                <NewsList title={"Health"} articles={articles} open={open}  nbline={3} />
              </Col>


            </Col>




            <Col style={{ position: "fixed", right: 0, maxWidth: "25%", borderLeftWidth: 3, borderLeftStyle: "solid", borderColor: "#FFF"  }} className='p-0 shadow' >

              <Container className='p-0'>

                <Nav_card articles={articles} />

              </Container>

            </Col>


          </Container>

        </Container >

      </Container>

    )






  );
}

export default App;

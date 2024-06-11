
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';


import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { Button, Card, Nav, Navbar } from 'react-bootstrap';

import Stackcard from './components/Stack_card.js';
import { Hearts, Newspaper } from 'react-bootstrap-icons';
import NavButton from './components/NavButton.js';

import NewsHeadBoard from './components/NewsHeadBoard.js';
import NewsList from './components/NewsList.js';
import NewsCard from './components/Card.js';




function App() {

  const { isLoading, error, data, status } = useQuery('ad3aa392a85b4007a3d4c225c5c6177e', () =>
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=ad3aa392a85b4007a3d4c225c5c6177e').then(res =>
      res.json()
    )
  );



  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>An error has occurred: {error.message}</p>;

  const { articles } = data;

  return (
    <Container className='p-0 bg_main' fluid>

      <Row className='g-0'>

        <Col className='p-0 shadow' xs={0} md={2} >

          <Container className='p-0 vh-100'>

            <Container as={Button} variant="transparent" className='py-4 border-bottom bg_main rounded-0' fluid >
              <Card as={Button} href={articles[0].url} className='shadow p-0 text-center rounded-0 border-0' variant="light">

                {articles[0].urlToImage && articles[0].urlToImage !== "None" && (

                  <Card.Img variant="top" className='rounded-0' src={articles[0].urlToImage} />

                )}
                <Card.Body >

                  <Card.Title className='fs-4 fw-600 m-0' >{"PALESTINE"}</Card.Title>
                </Card.Body>
              </Card>
            </Container>

            <Container as={Button} variant="transparent" className='py-4 border-bottom bg_main rounded-0' fluid >
              <Card as={Button} href={articles[7].url} className='shadow p-0 text-center rounded-0 border-0' variant="light">

                {articles[7].urlToImage && articles[7].urlToImage !== "None" && (

                  <Card.Img variant="top" className='rounded-0' src={articles[7].urlToImage} />

                )}
                <Card.Body >

                  <Card.Title className='fs-4 fw-600 m-0' >{"CONGO"}</Card.Title>
                </Card.Body>
              </Card>
            </Container>

          </Container>

        </Col>


        <Col>

          <Container className='p-0'>

            <Navbar bg="border bor_bot_color bg_main" data-bs-theme="light">
              <Container className='py-3 px-4' >
                <div className='dark bg-dark px-2 me-3'>
                  <h1 className='text-white m-0'>
                    N
                  </h1>
                </div>
                <Navbar.Brand className='fs-2 fw-bold me-4' href="#home">NewsBoard</Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav justify className="me-auto">
                    <NavButton name={"HOME"} />
                    <NavButton name={"POLITICS"} />
                    <NavButton name={"ECONOMY"} />
                    <NavButton name={"SCIENCE"} />
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>

            <Container className='h-75 px-4' >

              <Col className='px-0 pt-4' >

                <Row className='p-0 justify-content-center'  >
                  <Col className='pe-0' md={"auto"}>
                    <div className='p-2 pr-1'>
                      <h1 className='display-5 m-0'>
                        Latest
                      </h1>
                    </div>
                  </Col>

                  <Col className='pl-1' md={"auto"}>
                    <div className='dark bg-dark p-2 '>
                      <h1 className='text-white display-5 fw-bold m-0'>
                        News
                      </h1>
                    </div>
                  </Col>
                </Row>

              </Col>

              <NewsHeadBoard />

              <Col className='px-0 pt-3'>
                <Card bg='dark' text='white'>
                  <Card.Header >Quote</Card.Header>
                  <Card.Body>
                    <blockquote className="blockquote mb-0">
                      <p>
                        {' '}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                        posuere erat a ante.{' '}
                      </p>
                      <footer className="blockquote-footer">
                        Someone famous in <cite title="Source Title">Source Title</cite>
                      </footer>
                    </blockquote>
                  </Card.Body>
                </Card>

              </Col>


              <NewsList articles={articles} />


            </Container>

          </Container >

        </Col>



      </Row>

    </Container>

  );
}

export default App;

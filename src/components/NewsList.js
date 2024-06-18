import React from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Stackcard from './Stack_card.js';

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
        
    return (

        <Col className='h-100 py-4' >

            <Row xs={1} md={3} className='g-3' >

                {Array.from({ length: 3 }).map((_, idx) => (
                    <Col key={idx}>
                        <Stackcard articles={props.articles.filter((_,index) => index % 3 === idx  )} i_line={idx} />
                    </Col>
                )
                )}

            </Row>

        </Col>


    )
}

export default NewsList;
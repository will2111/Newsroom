import { Offcanvas, Button, Card, Container, Stack, Badge } from "react-bootstrap";
import Hover from "./utils/Hover";

export default function Nav_card(props) {
  const { articles } = props;
  const topics = [{ name: "Economy", size: 4 }, { name: "France", size: 5 }, { name: "Technology", size: 2 }];
  const img = 'urlToImage'

  return (


    <Offcanvas style={{ width: "25%", backgroundColor: "#1D1D1E" }} show={true} placement={"end"} backdrop={false} scroll={true}>
     
      <Offcanvas.Body style={{alignContent:"center"}} className="p-0">
        <Stack className="p-0">
          {topics.slice(0, 3).map((topic, idx) =>

            <Container className='p-0 px-4 rounded-0 my-3' fluid >
              <Hover grow={"_image"}>
                <Card style={{ aspectRatio: 1.5, backgroundColor: "#1D1D1E" }} href={articles[idx].url} className='p-0 rounded-0'>
                  {articles.slice(idx * 3, (idx * 3) + 3).map((article, idy) =>
                    <Container className="p-0 shadow" style={{ width: "100%", position: "absolute", zIndex: 3 - idy, opacity: (1 - (0.25 * idy)), left: (idy * 5), top: (idy * 5) }} >
                      <Card.Img className="p-0 rounded-0 p-1" style={{ width: "100%", aspectRatio: 1.5 ,borderWidth:1.5,borderStyle:"solid",borderColor:"#FFF" }} variant="top" src={article[img]} />
                    </Container>
                  )}

                  <Card.Body style={{ zIndex: 4 }} className='position-absolute w-100 h-100' >
                    <Container className="p-2 shadow_btn fit" style={{ backgroundColor: "#e9ecef", borderRadius: 4 }} >
                      <Card.Title style={{ maxWidth: "100%", overflow: "hidden" }} className='fit fs-6 fw-600 m-0 p-1' >{topic.name}</Card.Title>
                    </Container>

                  </Card.Body>
                </Card>
              </Hover>
            </Container>

          )}
        </Stack>

      </Offcanvas.Body>
    </Offcanvas>

  )
}
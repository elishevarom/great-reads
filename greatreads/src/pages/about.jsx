import { Container, Row, Col, Card } from 'react-bootstrap';

export function About() {
    return(
        <Container className=" text-center my-5">
        <Row className="justify-content-center">
            <Col md={10}>
            <Card>
                <Card.Header as="h5" className="text-center">About Us</Card.Header>
                <Card.Body>
                <Card.Text>
                Welcome to <strong>Great Reads</strong>, your go-to resource for information on elementary-aged children's books! Whether you're a parent, teacher, or young reader, our site provides comprehensive details about a wide range of books, including titles, authors, ratings, intended age ranges, and genres.
                </Card.Text>
              <Card.Text as="h4" className="mt-4 mb-3">Our Vision</Card.Text>
              <Card.Text>
                Great Reads was born out of a passion for storytelling and a desire to make quality children's literature accessible to everyone. We understand the impact that a good book can have on a child's development and strive to provide a platform where every child can find a story that resonates with them.
              </Card.Text>
              <Card.Text as="h4" className="mt-4 mb-3">Join Us</Card.Text>
              <Card.Text>
                We invite you to explore our website and join our community of readers. Whether you're a parent looking for the next great read for your child, a teacher seeking educational resources, or a young reader eager for new adventures, Great Reads is here for you.
              </Card.Text>
              <Card.Text className="text-center mt-4">
                Happy Reading!
              </Card.Text>
              <Card.Text className="text-center">
                The Great Reads Team
              </Card.Text>
              <Row>
              <Col md={3}>
                  <Card>
                    <Card.Body>
                      <Card.Title className="h6 mb-0 text-center">Zack O'Connell</Card.Title>
                      <Card.Text className="text-muted text-center">Co-founder & CFO</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={3}>
                  <Card>
                    <Card.Body>
                      <Card.Title className="h6 mb-0 text-center">Menucha Rooshanshad</Card.Title>
                      <Card.Text className="text-muted text-center">Co-founder & CEO</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={3}>
                  <Card>
                    <Card.Body>
                      <Card.Title className="h6 mb-0 text-center">Leora Samuels</Card.Title>
                      <Card.Text className="text-muted text-center">Co-founder & CIO</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={3}>
                  <Card>
                    <Card.Body>
                      <Card.Title className="h6 mb-0 text-center">Miriam Wetstein</Card.Title>
                      <Card.Text className="text-muted text-center">Co-founder & COO</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              </Card.Body>
            </Card>
            </Col>
        </Row>
        </Container>
    )
}


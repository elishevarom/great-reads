import { Container, Row, Col, Card } from 'react-bootstrap';

export function About() {
    return(
        <Container className="my-5">
        <Row className="justify-content-center">
            <Col md={8}>
            <Card>
                <Card.Header as="h5" className="text-center">About Us</Card.Header>
                <Card.Body>
                <Card.Title className="text-center">Welcome to Great Reads!</Card.Title>
                <Card.Text>
                    Welcome to <strong>Great Reads</strong>, your go-to resource for information on elementary-aged children's books! Whether you're a parent, teacher, or young reader, our site provides comprehensive details about a wide range of books, including titles, authors, ratings, intended age ranges, and genres.
                </Card.Text>
                <Card.Text>
                    We offer the following features to enhance your experience:
                </Card.Text>
                <ul>
                    <li><Card.Text><strong>Create new book entries:</strong> Easily add information about your favorite books to our database.</Card.Text></li>
                    <li><Card.Text><strong>See information about a specific book:</strong> Quickly access detailed descriptions, ratings, and more.</Card.Text></li>
                    <li><Card.Text><strong>Add a book review:</strong> Share your thoughts and opinions about a book to help others make informed decisions and enrich their reading experiences.</Card.Text></li>
                    <li><Card.Text><strong>Delete a specified book entry:</strong> Remove books that are no longer relevant or needed.</Card.Text></li>
                </ul>
                <Card.Text>
                    Explore our collection and discover the perfect books for elementary-aged children today!
                </Card.Text>
                <Card.Text>
                Meet the founders and CEOs who lead Great Reads:
              </Card.Text>
              <Row>
                <Col md={4}>
                  <Card>
                    <Card.Body>
                      <Card.Title className="h6 mb-0 text-center">Menucha Rooshanshad</Card.Title>
                      <Card.Text className="text-muted text-center">Co-founder & CEO</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card>
                    <Card.Body>
                      <Card.Title className="h6 mb-0 text-center">Leora Samuels</Card.Title>
                      <Card.Text className="text-muted text-center">Co-founder & CFO</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
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


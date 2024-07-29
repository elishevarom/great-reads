import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Helmet} from 'react-helmet';

const API_RETRIEVE_URL = 'https://du4e4w01n2.execute-api.us-east-1.amazonaws.com/default/retrieveGreatreadsBook';
const API_UPDATE_URL = 'https://du4e4w01n2.execute-api.us-east-1.amazonaws.com/default/updateGreatreadsBook';

const backgroundImageStyle = {
    top: 0,
    left: 0,
    zIndex: -1,
    backgroundImage: 'url(booksontheside.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100vw',
  };

export function Update() {
    const [bookName, setBookName] = useState("");
    const [bookInfo, setBookInfo] = useState(null);
    const [reviewer, setReviewer] = useState("");
    const [reviewTitle, setReviewTitle] = useState("");
    const [newReview, setNewReview] = useState("");

    function retrieveBookInfo() {
        fetch(`${API_RETRIEVE_URL}?bookName=${bookName}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Book not found!");
                }
                return response.json();
            })
            .then(data => {
                setBookInfo(data);
            })
            .catch(error => {
                console.error("Error retrieving book info:", error);
                setBookInfo(null);
                alert(error.message);
            });
            console.log(bookInfo)
    }

    function addReview() {
        if (newReview.trim() !== "" && reviewer.trim() !== "" && reviewTitle.trim() !== "") {
            const now = new Date();
            const formattedDate = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
            const newReviewObj = {
                title: reviewTitle,
                reviewer: reviewer,
                text: newReview,
                date: formattedDate
            };
            console.log(newReviewObj)
            fetch(`${API_UPDATE_URL}?bookName=${bookName}`, {
                method: 'POST',
                body: JSON.stringify(newReviewObj)
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Error adding review. Please try again.");
                }
                return response.json();
            })
            .then(data => {
                setBookInfo(data);
                setReviewTitle('');
                setReviewer('');
                setNewReview('');
            })
            .catch(error => {
                console.error("Error adding review:", error);
                alert(error.message);
            });
        } else {
            alert("Please fill in all fields: Reviewer, Review Title, and Review Text");
        }
    }

    return (
        <div>
            {/* <Container className="py-5"> */}
            <Container className="py-5" style={backgroundImageStyle}>
                <div>
                    <Helmet>
                        <title>Great Reads - Add Book Review</title>
                        <meta name="keywords" content="children's books, storybook, storytime, book reviews, good stories, kids book, free access, stories, story, book review, reviews, write review" />
                        <meta property="og:title" content="Great Reads-Add Review"/>
                        <meta property="og:description" content="Add your personal review on whichever book you read. Let others know your reading experience." />
                    </Helmet>
                </div>
                <Row>
                    <Col md={8} className="mb-4">
                        <h1 className="text-center mb-4">Add a Book Review</h1>
                        <div className="d-flex mb-3">
                            <Form.Control
                                type="text"
                                placeholder="Enter Book Name"
                                value={bookName}
                                onChange={event => setBookName(event.target.value)}
                                className="me-3"
                            />
                            <Button variant="secondary" onClick={retrieveBookInfo}>Choose Book</Button>
                        </div>
                        {bookInfo && (
                            <Row className="mt-4">
                                <Col md={6} className="mb-4">
                                    <Card className="h-100 shadow-sm">
                                        <Card.Body>
                                            <Card.Title className="text-center mb-3">{bookInfo.title}</Card.Title>
                                            <Card.Text><strong>Author:</strong> {bookInfo.author}</Card.Text>
                                            <Card.Text><strong>Genre:</strong> {bookInfo.genre}</Card.Text>
                                            <Card.Text><strong>Age Range:</strong> {bookInfo.ageRange}</Card.Text>
                                            <Card.Text><strong>Rating:</strong> {bookInfo.rating}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={6} className="mb-4 p-3">
                                    <Card className="shadow-sm" style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto' }}>
                                        <Card.Body>
                                            <h2 className="text-center mb-3">Reviews</h2>
                                            <Form.Group className="mb-3">
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Reviewer Name"
                                                    value={reviewer}
                                                    onChange={event => setReviewer(event.target.value)}
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Review Title"
                                                    value={reviewTitle}
                                                    onChange={event => setReviewTitle(event.target.value)}
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Control
                                                    as="textarea"
                                                    rows={5}
                                                    placeholder="Review"
                                                    value={newReview}
                                                    onChange={event => setNewReview(event.target.value)}
                                                    style={{ width: '100%' }}
                                                />
                                            </Form.Group>
                                            <Button variant="secondary" onClick={addReview} className="mb-3">Review</Button>
                                            {bookInfo.reviews.map((review, index) => (
                                                <Card key={index} className="mb-3" style={{ border: '1px solid #ccc', padding: '10px', width: '100%', marginLeft: 'auto', marginRight: 'auto' }}>
                                                    <Card.Title style={{ fontSize: '1.5rem', marginBottom: '0.5rem', textAlign: 'center' }}>{review.title}</Card.Title>
                                                    <Card.Text style={{ fontSize: '1.2rem', marginBottom: '0.5rem', fontStyle: 'italic', textAlign: 'center' }}>{review.text}</Card.Text>
                                                    <Card.Text style={{ fontSize: '0.9rem', fontStyle: 'italic', color: '#666', textAlign: 'center' }}>Reviewed by {review.reviewer} on {review.date}</Card.Text>
                                                </Card>
                                            ))}
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        )}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

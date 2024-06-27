import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const initialBookInfo = {
    "Harry Potter": {
        title: "Harry Potter",
        author: "JK Rowling",
        genre: "Fiction",
        ageRange: "12-15",
        rating: 4,
        reviews: []
    },
    "Lord of the Rings": {
        title: "Lord of the Rings",
        author: "J.R.R. Tolkien",
        genre: "Fantasy",
        ageRange: "12-15",
        rating: 5,
        reviews: []
    }
};

export function Update() {
    const [bookName, setBookName] = useState("");
    const [bookInfo, setBookInfo] = useState(null);

    function retrieveBookInfo() {
        const selectedBook = initialBookInfo[bookName];
        if (selectedBook) {
            setBookInfo(selectedBook);
        } else {
            setBookInfo(null);
            alert("Book not found!");
        }
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
            const updatedReviews = [...bookInfo.reviews, newReviewObj];
            const updatedBookInfo = { ...bookInfo, reviews: updatedReviews };
            setBookInfo(updatedBookInfo);
            setReviewTitle('');
            setReviewer('');
            setNewReview('');
        } else {
            alert("Please fill in all fields: Reviewer, Review Title, Age Range, and Review Text");
        }
    }

    const [reviewer, setReviewer] = useState("");
    const [reviewTitle, setReviewTitle] = useState("");
    const [newReview, setNewReview] = useState("");

    return (
        <Container className="py-5">
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
    );
}

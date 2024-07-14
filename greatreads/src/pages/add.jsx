import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Add() {
    const [books, setBooks] = useState([]);
    const [newBook, setNewBook] = useState({
        title: "",
        author: "",
        rating: "",
        ageRange: "",
        genre: ""
    });
    const [responseMessage, setResponseMessage] = useState({});

    const lambdaEndpoint = "https://du4e4w01n2.execute-api.us-east-1.amazonaws.com/default/addGreatReadsBook";

    async function addBookToList() {
        setResponseMessage({});
        if (newBook.title && newBook.author && newBook.rating && newBook.ageRange && newBook.genre) {
            const bookWithReviews = {
                ...newBook,
                pk: newBook.title, // Use title as primary key or any unique identifier
                reviews: [] // Empty array for reviews
            };

            const params = {
                method: 'POST',
                body: JSON.stringify(bookWithReviews),
            };

            fetch(lambdaEndpoint, params)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(_ => {
                    setResponseMessage({ variant: 'success', message: `${newBook.title} was created successfully` });
                    setBooks([...books, bookWithReviews]);
                    setNewBook({
                        title: "",
                        author: "",
                        rating: "",
                        ageRange: "",
                        genre: ""
                    });
                })
                .catch(_ => {
                    setResponseMessage({ variant: 'danger', message: `Error in creating ${newBook.title}` });
                });
        } else {
            alert('Please fill out all fields before adding the book.');
        }
    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        setNewBook({ ...newBook, [name]: value });
    }

    return (
        <Container className="mt-5">
            <Row className="mb-4">
                <Col>
                    <h1 className="text-center text-primary">Add a Book</h1>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col md={6}>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBookTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter book title"
                                name="title"
                                value={newBook.title}
                                onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBookAuthor">
                            <Form.Label>Author</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter book author"
                                name="author"
                                value={newBook.author}
                                onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBookRating">
                            <Form.Label>Rating</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter book rating"
                                name="rating"
                                value={newBook.rating}
                                onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBookAgeRange">
                            <Form.Label>Age Range</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter intended age range"
                                name="ageRange"
                                value={newBook.ageRange}
                                onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBookGenre">
                            <Form.Label>Genre</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter book genre"
                                name="genre"
                                value={newBook.genre}
                                onChange={handleInputChange} />
                        </Form.Group>
                    </Form>
                </Col>
            </Row>

            <Row className="justify-content-center mt-3">
                <Col md={6}>
                    <Button variant="success" onClick={addBookToList} className="w-100">Create Book List</Button>
                </Col>
            </Row>
            {books.length > 0 && (
                <Row className="justify-content-center mt-4">
                    <Col md={8}>
                        <Card>
                            <Card.Body>
                                <Card.Title className="text-center">{books[books.length - 1].title}</Card.Title>
                                <Card.Text>
                                    <strong>Author:</strong> {books[books.length - 1].author} <br />
                                    <strong>Rating:</strong> {books[books.length - 1].rating} <br />
                                    <strong>Age Range:</strong> {books[books.length - 1].ageRange} <br />
                                    <strong>Genre:</strong> {books[books.length - 1].genre} <br />
                                    <strong>Reviews:</strong>
                                    <ul>
                                        {/* Render reviews here */}
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            )}
            {responseMessage.message && (
                <Row className="justify-content-center mt-5">
                    <Col md={6}>
                        <Alert variant={responseMessage.variant}>{responseMessage.message}</Alert>
                    </Col>
                </Row>
            )}
        </Container>
    );
}

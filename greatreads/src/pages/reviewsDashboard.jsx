import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import RatingBarChart from '../components/RatingBarChart';
import GenrePieChart from '../components/GenrePieChart';
import ReviewerBarChart from '../components/ReviewerBarChart';

const ReviewsDashboard = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const response = await fetch('https://du4e4w01n2.execute-api.us-east-1.amazonaws.com/default/getAllBooks');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setBooks(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchAllBooks();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Extracting reviews from books
  const reviews = books.flatMap(book => book.reviews.map(review => ({
    ...review,
    bookTitle: book.pk, // Adding book title to each review
    bookRating: book.rating,
  })));

  // Preparing genre data
  const genreData = books.reduce((acc, book) => {
    const genre = book.genre;
    if (!acc[genre]) {
      acc[genre] = { genre, value: 0 };
    }
    acc[genre].value += 1;
    return acc;
  }, {});
  const genreArray = Object.values(genreData);

  return (
    <Container>
      <div className="text-center mb-5">
        <h2 className="display-4 font-weight-bold">Book Reviews Dashboard</h2>
        <p className="lead">Explore reviews for our books</p>
      </div>
      <Row>
        <Col md={6}>
          <h3>Ratings by Book Title</h3>
          <RatingBarChart data={books} />
        </Col>
        <Col md={6}>
          <h3>Genre Distribution</h3>
          <GenrePieChart data={genreArray} />
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <h3>Reviews by Reviewer</h3>
          <ReviewerBarChart data={reviews} />
        </Col>
      </Row>
    </Container>
  );
};

export default ReviewsDashboard;

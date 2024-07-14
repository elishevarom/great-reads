import React, { useState, useEffect } from 'react';
import { Container, Dropdown, ButtonGroup } from 'react-bootstrap';

export function Retrieve() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedBook, setSelectedBook] = useState(null);


        //fetching all books to display titles in dropdown
        useEffect(() => {
          const fetchAllBooks = async () => {
            try { 
              const response = await fetch('https://du4e4w01n2.execute-api.us-east-1.amazonaws.com/default/getAllBooks');
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              const result = await response.json();
              setBooks(result);
            } 
            catch (error) {
              setError(error);
            } 
            finally {
                setLoading(false);
            }
          };
          fetchAllBooks();
        }, []);
     
    //fetching data of the requested book    
    const handleSelect = async (pk) => {
        try { 
            const response = await fetch(`https://du4e4w01n2.execute-api.us-east-1.amazonaws.com/default/retrieveGreatreadsBook?bookName=${pk}`)
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            setSelectedBook(result);
        } 
        catch (error) {
        setError(error);
        } 
        finally {
            setLoading(false);
        }
    };
    
    return (
        <Container>
            <div className="text-center mb-5">
                <h2 className="display-4 font-weight-bold">Discover Our Books</h2>
                <p className="lead">Select one of our books to view detailed information and read the latest reviews</p>
            </div>
            <div className="d-flex justify-content-center mb-4">
                <Dropdown as={ButtonGroup}>
                    <Dropdown.Toggle variant="outline-dark" size="lg" id="dropdown-custom-1">
                        Select a Book
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                    {books.map(book => (
                            <Dropdown.Item 
                                key={book.pk} 
                                onClick={() => handleSelect(book.pk)}
                            >   
                                {book.pk}
                            </Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            {selectedBook && (
                <div className="mt-4">
                    <h3>{selectedBook.pk}</h3>
                    <p><strong>Author:</strong> {selectedBook.author}</p>
                    <p><strong>Rating:</strong> {selectedBook.rating} / 5</p>
                    <p><strong>Age Range:</strong> {selectedBook.ageRange}</p>
                    <p><strong>Genre:</strong> {selectedBook.genre}</p>
                    <h5>Reviews:</h5>
                    <ul>
                        {selectedBook.reviews.map((review, index) => (
                            <li key={index}>
                                <strong>{review.reviewer}:</strong> {review.title} 
                                <div> Comment: {review.text} </div>
                                <div> Date: {review.date} </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </Container>
    );
}
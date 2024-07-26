import React, { useState, useEffect } from 'react';
import { Container, Dropdown, ButtonGroup } from 'react-bootstrap';
import {Helmet} from 'react-helmet';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 

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
            <div>
                <Helmet>
                    <title>Great Reads - Find a Book Us</title>
                    <meta name="keywords" content="children's books, storybook, storytime, book reviews, good stories, kids book, free access, stories, story, reading level, elementary, preschool, middle school" />
                    <meta property="og:title" content="Great Reads-Find a Book"/>
                    <meta property="og:description" content="Find a book you know you'll love at the appropriate reading level for you." />
                </Helmet>
            </div>
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
            <Carousel 
                showThumbs={false} 
                showStatus={false} 
                infiniteLoop 
                useKeyboardArrows 
                autoPlay 
                interval={3000}
                swipeable
                emulateTouch
                top={0}
                left={0}
                width= {'100%'}
                height = {'100%'}
                >
                <div>
                    <img src="booktower.jpg" alt="A tower made form books and novels and stories"/>
                </div>
                <div>
                    <img src="bookbutterflies.jpg" alt="Book or novel with charachters coming to life"/>
                </div>
                <div>
                    <img src="heartbooks.jpg" alt="Story with a heart formed from pages"/>
                </div>
                <div>
                    <img src="glowingbooks.jpg" alt="A glowing book"/>
                </div>
                <div>
                    <img src="colorfulbooks.jpg" alt="A stack of colorful exciting books"/>
                </div>
                <div>
                    <img src="astheticbook.jpg" alt="A calming asthetic book"/>
                </div>
                <div>
                    <img src="blackandwhitebooks.jpg" alt="A stack of simple stories"/>
                </div>
                <div>
                    <img src="bookwithroses.jpg" alt="A book with roses and flowers"/>
                </div>
                <div>
                    <img src="girlreading.jpg" alt="A young girl sitting on a large stack of books reading a story"/>
                </div>
                <div>
                    <img src="sparklybook.jpg" alt="A sprakly exciting book"/>
                </div>
                <div>
                    <img src="blurredbooks.jpg" alt="A stack of exciting stories waiting to be read"/>
                </div>
                <div>
                    <img src="blurredlibrary.jpg" alt="A big library filled with books and stories"/>
                </div>
                <div>
                    <img src="lightbookstack.jpg" alt="A pile of books for all ages"/>
                </div> 
            </Carousel>
        </Container>
    );
}
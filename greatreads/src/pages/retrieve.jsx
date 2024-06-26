import React, { useState } from 'react';
//import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { Container, Dropdown, DropdownButton } from 'react-bootstrap';

export function Retrieve() {
    const books = [
        {
            id: 1,
            title: 'Curious George',
            author: 'H. A. Rey',
            rating: 3,
            ageRange: "4-7",
            genre: "Children's Literature",
            reviews: [
                {   title: "Great book!",
                    reviewer: "Sally A.",
                    text: "Interesting and my kids just love it",
                    date: "June 13, 2024",
                },
                { title: "Pretty good",
                    reviewer: "Andrew Jackson",
                    text: "Interesting and my kids just love it",
                    date: "May 3, 2023",
                },
            ],
        },
        {
            id: 2,
            title: 'Cam Jansen',
            author: 'David A. Adler',
            rating: 4,
            ageRange: "7-11",
            genre: "Mystery",
            reviews: [
                {   title: "Interesting!",
                    reviewer: "L. Sanders",
                    text: "So intriguing and was a huge hit for my kids!",
                    date: "June 13, 2024"
                },
                { title: "Not bad",
                    reviewer: "R",
                    text: "Interesting and my kids just love it",
                    date: "May 9, 2023",
                },
                // { reviewer: 'Reviewer C', comment: 'Not bad.', rating: 3 },
                // { reviewer: 'Reviewer D', comment: 'Enjoyed it.', rating: 4 },
            ],
        },
        {
            id: 3,
            title: 'The Little Engine That Could',
            author: 'Watty Piper',
            rating: 5,
            ageRange: "3-7",
            genre: "Children's Literature",
            reviews: [
                {   title: "Not my style",
                    reviewer: "Lobsters",
                    text: "ehhh",
                    date: "a rainy day",
                },
                { title: "Not bad",
                    reviewer: "menucha",
                    text: "pretty great",
                    date: "one day",
                },
                // { reviewer: 'Reviewer E', comment: 'Fantastic read!', rating: 5 },
                // { reviewer: 'Reviewer F', comment: 'Loved it.', rating: 4 },
            ],
        },
    ];

    const [selectedBook, setSelectedBook] = useState(null);

    const handleSelect = (bookId) => {
        const book = books.find(b => b.id === bookId);
        setSelectedBook(book);
    };


    return (
        <Container>
            <DropdownButton id="dropdown-basic-button" title="Select a Book">
                {books.map(book => (
                    <Dropdown.Item 
                        key={book.id} 
                        onClick={() => handleSelect(book.id)}
                    >
                        {book.title}
                    </Dropdown.Item>
                ))}
            </DropdownButton>

            {selectedBook && (
                <div className="mt-4">
                    <h3>{selectedBook.title}</h3>
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

    // return (
    //     <Container>
    //         <DropdownButton id="dropdown-basic-button" title="Select a Book">
    //             {books.map(book => (
    //                 <Dropdown.Item 
    //                     key={book.id} 
    //                     onClick={() => handleSelect(book.id)}
    //                 >
    //                     {book.title}
    //                 </Dropdown.Item>
    //             ))}
    //         </DropdownButton>

    //         {selectedBook && (
    //             <div className="mt-4">
    //                 <h3>{selectedBook.title}</h3>
    //                 <p><strong>Author:</strong> {selectedBook.author}</p>
    //                 <p><strong>Average Rating:</strong> {selectedBook.averageRating} / 5</p>
    //                 <h5>Reviews:</h5>
    //                 <ul>
    //                     {selectedBook.reviews.map((review, index) => (
    //                         <li key={index}>
    //                             <strong>{review.reviewer}:</strong> {review.comment}
    //                             <div>Rating: {review.rating} / 5</div>
    //                         </li>
    //                     ))}
    //                 </ul>
    //             </div>
    //         )}
    //     </Container>
    // );
}
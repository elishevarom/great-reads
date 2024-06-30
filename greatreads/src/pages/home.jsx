import React from 'react';
import {Container, Card} from 'react-bootstrap';

export function Home() {
    return (
        <div> 
            <header className=" container text-center py-5 bg-light py-5 mb-4">
                <h1>Welcome to Great Reads</h1>
                <p>Discover and share your love for books</p>
            </header>
            <Card.Text className="container text-center">
                Welcome to <strong>Great Reads</strong>, your go-to resource for information on elementary-aged children's books! Whether you're a parent, teacher, or young reader, our site provides comprehensive details about a wide range of books, including titles, authors, ratings, intended age ranges, and genres.
            </Card.Text>
            <Card.Text className="container text-center">
                We offer the following features to enhance your experience:
            </Card.Text>
            <ul>
                <li><Card.Text><strong>Create new book entries:</strong> Easily add information about your favorite books to our database.</Card.Text></li>
                <li><Card.Text><strong>See information about a specific book:</strong> Quickly access detailed descriptions, ratings, and more.</Card.Text></li>
            <li><Card.Text><strong>Add a book review:</strong> Share your thoughts and opinions about a book to help others make informed decisions and enrich their reading experiences.</Card.Text></li>
                <li><Card.Text><strong>Delete a specified book entry:</strong> Remove books that are no longer relevant or needed.</Card.Text></li>
            </ul>
            <Card.Text className="container text-center">
                Explore our collection and discover the perfect books for elementary-aged children today!
            </Card.Text>
            <section className="row container text-center py-5">
                <div className="col-md-4 mb-4">
                    <div className="card h-100">
                        <img src="book4.jpg" className="card-img-top" alt="Contribute By Adding Your Favorite Books"/>
                        <div className="card-body">
                            <h2 className="card-title">Contribute By Adding Your Favorite Books</h2>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card h-100">
                        <img src="book5.jpg" className="card-img-top" alt="Add Your Own Reviews"/>
                        <div className="card-body">
                            <h2 className="card-title">Add Your Own Reviews</h2>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card h-100">
                        <img src="books2.jpg" className="card-img-top" alt="Discover New Books"/>
                        <div className="card-body">
                            <h2 className="card-title">Discover New Books</h2>
                        </div>
                    </div>
                </div>
            </section>
        </div>
                        // <Card.Title className="text-center">Welcome to Great Reads!</Card.Title>
                        // <Card.Text>
                        //     Welcome to <strong>Great Reads</strong>, your go-to resource for information on elementary-aged children's books! Whether you're a parent, teacher, or young reader, our site provides comprehensive details about a wide range of books, including titles, authors, ratings, intended age ranges, and genres.
                        // </Card.Text>
                        // <Card.Text>
                        //     We offer the following features to enhance your experience:
                        // </Card.Text>
                        // <ul>
                        //     <li><Card.Text><strong>Create new book entries:</strong> Easily add information about your favorite books to our database.</Card.Text></li>
                        //     <li><Card.Text><strong>See information about a specific book:</strong> Quickly access detailed descriptions, ratings, and more.</Card.Text></li>
                        //     <li><Card.Text><strong>Add a book review:</strong> Share your thoughts and opinions about a book to help others make informed decisions and enrich their reading experiences.</Card.Text></li>
                        //     <li><Card.Text><strong>Delete a specified book entry:</strong> Remove books that are no longer relevant or needed.</Card.Text></li>
                        // </ul>
                        // <Card.Text>
                        //     Explore our collection and discover the perfect books for elementary-aged children today!
                        // </Card.Text>
    );
}

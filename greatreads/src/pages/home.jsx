import React from 'react';
import { Link } from 'react-router-dom';
import {Card} from 'react-bootstrap';
import {Helmet} from 'react-helmet';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 


const backgroundImageStyle = {
  // position: 'fixed',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  zIndex: -1,
  backgroundImage: 'url(chalkboard.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  // width: '100vw',
  // height: '100vh'
};

export function Home() {
  return (
    <div style={backgroundImageStyle}> 
      <Helmet>
        <title>Great Reads</title>
        <meta name="keywords" content="children's books, storybook, storytime, book reviews, good stories" />
        <meta property="og:title" content="Great Reads-Home Page"/>
        <meta property="og:description" content="Learn more about our books! Looking for a fairy tale? An exciting adventure? We have it all! Find reviews, ratings, and more on Great Reads." />
      </Helmet>
      <header className="container text-center py-5 bg-light py-5 mb-4">
        <h1>Welcome to Great Reads</h1>
        <p>Discover and share your love for books</p>
      </header>
      {/* <Card> */}
        <Card.Text className="container text-center" style={{ color:  '#FAF9F6' }}>
          Welcome to <strong>Great Reads</strong>, your go-to resource for information on elementary-aged children's books! Whether you're a parent, teacher, or young reader, our site provides comprehensive details about a wide range of books, including titles, authors, ratings, intended age ranges, and genres.
        </Card.Text>
        <Card.Text className="container text-center" style={{ color: 'white' }}>
          We offer the following features to enhance your experience:
        </Card.Text>
        <Card.Text>
          <ul style={{ color: '#FAF9F6' }}>
            <li><Card.Text><strong>Create new book entries:</strong> Easily add information about your favorite books to our database.</Card.Text></li>
            <li><Card.Text><strong>See information about a specific book:</strong> Quickly access detailed descriptions, ratings, and more.</Card.Text></li>
            <li><Card.Text><strong>Add a book review:</strong> Share your thoughts and opinions about a book to help others make informed decisions and enrich their reading experiences.</Card.Text></li>
            <li><Card.Text><strong>Delete a specified book entry:</strong> Remove books that are no longer relevant or needed.</Card.Text></li>
          </ul>
        </Card.Text>
        <Card.Text className="container text-center" style={{ color: 'white' }}>
          Explore our collection and discover the perfect books for kids today!
        </Card.Text>
      {/* </Card> */}
      <section className="row container text-center py-5">
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <img src="book4.jpg" className="card-img-top" alt="Contribute By Adding Your Favorite Books" />
            <div className="card-body">
              <Link to="/addBook" className="btn btn-light" style={{ fontSize: '1.5rem', padding: '1rem 2rem' }}>
              Contribute By Adding Your Favorite Books
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <img src="book5.jpg" className="card-img-top" alt="Add Your Own Reviews" />
            <div className="card-body">
              <Link to="/addReview" className="btn btn-light" style={{ fontSize: '1.5rem', padding: '1rem 2rem' }}>
                Add Your Own Reviews
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <img src="books2.jpg" className="card-img-top" alt="Discover New Books" />
            <div className="card-body">
              <Link to="/findBook" className="btn btn-light" style={{ fontSize: '1.5rem', padding: '1rem 2rem' }}>
                Discover New Books
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

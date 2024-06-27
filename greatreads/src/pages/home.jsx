import React from 'react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="container text-center py-5">
      <header className="bg-light py-5 mb-4">
        <h1>Welcome to Great Reads</h1>
        <p>Discover and share your love for books</p>
      </header>
      <section className="row">
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <img src="book4.jpg" className="card-img-top" alt="Contribute By Adding Your Favorite Books" />
            <div className="card-body">
              <Link to="/add" className="btn btn-light" style={{ fontSize: '1.5rem', padding: '1rem 2rem' }}>
              Contribute By Adding Your Favorite Books
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <img src="book5.jpg" className="card-img-top" alt="Add Your Own Reviews" />
            <div className="card-body">
              <Link to="/update" className="btn btn-light" style={{ fontSize: '1.5rem', padding: '1rem 2rem' }}>
                Add Your Own Reviews
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <img src="books2.jpg" className="card-img-top" alt="Discover New Books" />
            <div className="card-body">
              <Link to="/retrieve" className="btn btn-light" style={{ fontSize: '1.5rem', padding: '1rem 2rem' }}>
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

import React from 'react';

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
                        <img src="book4.jpg" className="card-img-top" alt="See Top Rated Books"/>
                        <div className="card-body">
                            <h2 className="card-title">See Top Rated Books</h2>
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
    );
}

import { Outlet, Link } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../pages.css';

export function Layout() {
  return (
    <>
      <header>
        <Navbar bg="dark" variant="dark" expand="lg" className="py-3">
          <Container>
            <Navbar.Brand as={Link} to="/" className="mx-auto text-light">
              Great Reads
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav" className="justify-content-center">
              <Nav>
                <Nav.Link as={Link} to="/" className="text-light">Home</Nav.Link>
                <Nav.Link as={Link} to="/about" className="text-light">About Us</Nav.Link>
                <Nav.Link as={Link} to="/addBook" className="text-light">Add a Book</Nav.Link>
                <Nav.Link as={Link} to="/addReview" className="text-light">Add Your Review</Nav.Link>
                <Nav.Link as={Link} to="/findBook" className="text-light">Find a Book</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <main className="container my-5">
        <Outlet />
      </main>
    </>
  );
}

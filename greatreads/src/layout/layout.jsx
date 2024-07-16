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
                <Nav.Link as={Link} to="/about" className="text-light">About</Nav.Link>
                <Nav.Link as={Link} to="/add" className="text-light">Add</Nav.Link>
                <Nav.Link as={Link} to="/update" className="text-light">Update</Nav.Link>
                <Nav.Link as={Link} to="/retrieve" className="text-light">Retrieve</Nav.Link>
                <Nav.Link as={Link} to="/pay" className="text-light">Membership</Nav.Link>
                
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

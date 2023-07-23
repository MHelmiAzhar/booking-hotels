import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

function NavbarComponent() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: '#6527BE' }}>
      <Container>
        <Navbar.Brand
          href="#"
          className="text-light"
          style={{ fontSize: '26px' }}
        >
          The Hotels
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          ></Nav>

          <Button variant="light" className="me-3">
            Login
          </Button>
          <Button variant="light">Register</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent

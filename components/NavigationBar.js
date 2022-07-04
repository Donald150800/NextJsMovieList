import { Navbar,Nav,Container, Image } from "react-bootstrap"
const NavigationBar = () => {
   return(
    <Navbar bg="dark" variant="dark" fixed="top">
    <Container>
      <Navbar.Brand href="#home">
      Jayakarta Movies
      </Navbar.Brand>
      <Nav className='me-auto'>
          <Nav.Link >Trending</Nav.Link>
          <Nav.Link>Superhero</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
   )
}
export default NavigationBar

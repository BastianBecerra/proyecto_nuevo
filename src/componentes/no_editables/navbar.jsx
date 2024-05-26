import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return(
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
            <Navbar.Brand href="#Inicio" >Bienvenido</Navbar.Brand>
            </Container>
                <Nav className="me-auto">
                    <Nav.Link href="#Inicio">Inicio</Nav.Link>
                    <Nav.Link href="#Cambiar">A Cambiar</Nav.Link>
                    <Nav.Link href="#Cambiar">A Cambiar</Nav.Link>
                </Nav>
        </Navbar>
    )
}

export default Header;
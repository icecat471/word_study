import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const Header: React.FC = () => {
    return (
        <Navbar bg="dark" variant="dark" expand='sm' fixed='top'>
            <Container>
                <Navbar.Brand href="/">한국어공부 for Mizu.</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/list">単語リスト</Nav.Link>
                    <Nav.Link href="/memorize">覚える</Nav.Link>
                    <Nav.Link href="/test">テスト</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header;
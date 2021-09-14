import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import '../Style/Header.css'

const Header = () => {
    return (
        <Container className="HeaderContainer">
            <Row>
                <Col>
                    <h1 className="Header">Software Finder</h1>
                </Col>
            </Row>
        </Container>
    )
}

export default Header

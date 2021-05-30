import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import NavBar from '../NavBar/NavBar';
import Post from '../Post/Post';
import Sidebar from '../Sidebar/Sidebar';

const Home = () => {
    return (
        <div>
            <NavBar />
            <Container>
                <Row>
                    <Col md={3}>
                        {/* Sidebar */}
                        <Sidebar />
                    </Col>
                    <Col md={9}>
                        <Post />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;
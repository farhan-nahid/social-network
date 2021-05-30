import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import NavBar from '../NavBar/NavBar';
import Post from '../Post/Post';

const Home = () => {
    return (
        <div>
            <NavBar />
            <Container>
                <Row>
                    <Col md={3}> 
                        <h1>SideBar</h1>
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
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import NavBar from '../../NavBar/NavBar';
import SingleFriend from '../SingleFriend/SingleFriend';

const AllFriend = () => {
    const friends = useSelector((state) =>{
        return state.friend.allFriend
     })

    return (
        <>
        <NavBar />
        <Container>
            <Row>
                {
                    friends?.map(friend => <SingleFriend key={friend.id} friend={friend} />)
                }
             </Row>
        </Container>
        </>
    );
};

export default AllFriend;
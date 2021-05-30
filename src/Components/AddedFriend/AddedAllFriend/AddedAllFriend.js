import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import NavBar from '../../NavBar/NavBar';
import SingleAddedFriend from '../SingleAddedFriend/SingleAddedFriend';

const AddedAllFriend = () => {
    const addedFriends = useSelector((state) =>{
        return state.friend.friendList
     })
    return (
        <>
        <NavBar />
        <Container>
            <Row>
          {
                addedFriends.map(friend => <SingleAddedFriend key={friend.id} friend={friend} />)
          }
          </Row>
        </Container>
        </>
    );
};

export default AddedAllFriend;
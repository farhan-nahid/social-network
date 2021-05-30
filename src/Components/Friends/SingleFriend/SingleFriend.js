import React, { useState } from 'react';
import { Button, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { AddToFriendList } from '../../../Redux/Actions/FriendAction';

const SingleFriend = ({friend}) => {
    const [isClicked, setIsClicked]=useState()
    const dispatch = useDispatch()
    const { name, club, image} = friend
    return (
        <Col md={12}>
            <div className='d-flex justify-content-around mt-3 p-3' style={{borderRadius:'10px', border:'1px solid gray'}}>
               <div>
                    <img style={{borderRadius:'50%', height:'100px', width:'100px'}} src={image} alt='...' />
               </div>
               <div>
                    <h5>{name}</h5>
                    <p>Company: {club}</p>
                    <Button variant='success'   disabled={isClicked} 
                     onClick={()=> {
                    dispatch(AddToFriendList(friend))
                    setIsClicked(true)
                    }}>Add To List</Button>
               </div>
            </div>
        </Col>
    );
};

export default SingleFriend;
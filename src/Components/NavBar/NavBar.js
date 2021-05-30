import firebase from "firebase/app";
import React, { useContext } from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const NavBar = () => {
    const [loggedInUser, setLoggedInUser, ] = useContext(UserContext);
    const {name} = loggedInUser;

    const friendList =  useSelector((state) => {
        return state.friend.friendList
    })


        const friends = useSelector((state) =>{
            return state.friend.allFriend
    })


    const handelSignOut= () => {
        firebase.auth().signOut()
        .then(res =>{
            const signOutUser = { 
                loggedInUser:false,
                name:""
            }
            setLoggedInUser(signOutUser)
        })
        .catch(err=>{
  
        })
    }
    return (
        <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand as={Link} to='/' >Social Network</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">   
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-primary">Search</Button>
            </Form>
            <Nav className="ml-auto">
                <Nav.Link as={Link} to='/home' className='mr-2'>Home</Nav.Link>
                <Nav.Link as={Link} to='/friend-request' className='mr-2'>Friend Request {friends.length}</Nav.Link>
                <Nav.Link as={Link} to='/friends' className='mr-2'>Friends {friendList.length}</Nav.Link>
                <Nav.Link  className='mr-2'> {name}</Nav.Link> 
                 <Button variant="outline-danger" className="btn-brand" onClick={handelSignOut}> Log Out</Button>
            </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default NavBar;
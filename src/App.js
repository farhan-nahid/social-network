import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import './App.css';
import AddedAllFriend from './Components/AddedFriend/AddedAllFriend/AddedAllFriend';
import AllFriend from './Components/Friends/AllFriends/AllFriend';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';


export const UserContext = createContext ();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={ [loggedInUser, setLoggedInUser] }>
      <Router>
        <Switch>
          <PrivateRoute exact path='/'>
            <Home />
          </PrivateRoute>
          <PrivateRoute  path='/home'>
            <Home />
          </PrivateRoute>
          <PrivateRoute path='/friend-request'>
            <AllFriend />
          </PrivateRoute>
          <PrivateRoute path='/friends'>
            <AddedAllFriend />
          </PrivateRoute>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </Router>

    </UserContext.Provider>
  );
}

export default App;

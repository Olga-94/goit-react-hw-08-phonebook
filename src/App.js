import React from 'react';
import { Container } from './App.styled';
// import Title from './Title/Title';
// import ContactForm from './Components/Contacts/Form/Form';
// import ContactList from './Components/Contacts/List/List';
// import Filter from './Components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch,  useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import AppBar from './Components/AppBar/AppBar';
import './App.styled';
import HomeView from './views/Home';
import RegisterView from './views/Register';
import LoginView from './views/Login';
import ContactsView from './views/Contacts';
import {authOperations, authSelectors} from './redux/auth/index-export';
import PrivateRoute from './Components/Route/PrivateRoute';
import PublicRoute from './Components/Route/PublicRoute';

 function App() {
  const dispatch = useDispatch();
  const isRefreshingCurrentUser = useSelector(authSelectors.getIsRefreshingCurrentUser);
  
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch])
  
  return (
    !isRefreshingCurrentUser && (
      <Container >
      <AppBar />
      <Switch>
        <PublicRoute exact path="/">
          <HomeView />
        </PublicRoute>

        <PublicRoute path="/registration" restricted>
            <RegisterView />
        </PublicRoute>

        <PublicRoute path="/login" redirectTo="/contacts" restricted>
          <LoginView />
        </PublicRoute>

        <PrivateRoute path="/contacts" redirectTo="/login">
          <ContactsView />
        </PrivateRoute>
      </Switch>
    </Container>)
    
  )
}

export default App;
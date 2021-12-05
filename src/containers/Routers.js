import React from 'react';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import TodoLayout from '../components/Todo/TodoLayout';
import NotFound from '../components/ErrorPages/NotFound';
import WelcomePage from '../containers/WelcomePage';
import Login from '../containers/Login';
import Profile from '../containers/Profile';
import Register from './Register';
import ProfileFileUpload from '../components/Profile/ProfileFileUpload';
// import NavBar from '../components/NavBar/NavBar';

function Routers() {
  return (
    <div>
      <Link to="/">default</Link> <Link to="/todo">todos</Link>{' '}
      <Link to="/notfound">not found</Link> <Link to="/login">login</Link>{' '}
      <Link to="/profile">profile</Link> <Link to="/register">register</Link>{' '}
      <Link to="/upload">upload</Link>

      <Switch>
        <Route path="/" exact component={WelcomePage} />
        <Route path="/todo" component={TodoLayout} />
        <Route path="/login" component={Login} />
        <Route path="/profile" component={Profile} />
        <Route path="/register" component={Register} />
        <Route path="/upload" component={ProfileFileUpload} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default Routers;

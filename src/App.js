import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from './components/Header';
import Login from './components/Login';
import UserIndex from './components/users/UserIndex';
import UserCreate from './components/users/UserCreate';
import UserEdit from './components/users/UserEdit';
import UserDetails from './components/users/UserDetails';
import UserDelete from './components/users/UserDelete';
import history from './history';

export default function App() {
  const token = useSelector((state) => state.token);
  return (
    <div className="ui container">
      <HashRouter history={history}>
        <div>
          <Header key={token} />
          <Route path="/" exact component={Login} />
          <Route path="/users" exact component={UserIndex} />
          <Route path="/users/create" exact component={UserCreate} />
          <Route path="/users/edit/:id" exact component={UserEdit} />
          <Route path="/users/detail/:id" exact component={UserDetails} />
          <Route path="/users/delete/:id" exact component={UserDelete} />
        </div>
      </HashRouter>
    </div>
  );
}

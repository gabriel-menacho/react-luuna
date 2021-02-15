import './App.css';
import { ButtonGroup } from 'reactstrap';
import cn from 'classnames';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './app.scss';
import { debounce } from 'lodash';
import { getUsers, getRepositories } from './store/reducers/ajaxCall/actions';
import { Route, Switch } from 'react-router';
import { push } from 'connected-react-router'
import UsersList from './components/UsersList';
import RepositoriesList from './components/RepositoriesList';
import { Container, Row, Col } from 'reactstrap';
const DEBOUNCE_DELAY = 500;

export default function App() {
  const [userSearch, setUserSearch] = useState(true);
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();

  const makeGitApiCall = () => {
    if (userSearch) {
      dispatch(push('/users'));
      dispatch(getUsers(searchText));
    } else {
      dispatch(push('/repositories'));
      dispatch(getRepositories(searchText));
    }
  };

  useEffect(makeGitApiCall, [userSearch, searchText]);

  const userSearchClassName = cn('user-search-btn', 'nav-btn', userSearch ? 'selected' : '');
  const repositorySearchClassName = cn('repository-search-btn', 'nav-btn', !userSearch ? 'selected': '');
  const onChange = debounce(ev => setSearchText(ev.target.value), DEBOUNCE_DELAY);

  return (
    <div className="App">
      <header className="App-header">
        <ButtonGroup className="button-group">
          <span className={userSearchClassName} onClick={() => {
            setUserSearch(true);
          }}>User Search</span>
          <span className={repositorySearchClassName} onClick={() => {
            setUserSearch(false);
          }}>Repository Search</span>
        </ButtonGroup>
        <input type="text" onChange={onChange}/>
        <>
          <Switch>
            <Route exact path="/users" render={() => (<UsersList />)} />
            <Route exact path="/repositories" render={() => (<RepositoriesList />)} />
          </Switch>
        </>
      </header>
    </div>
  );
}

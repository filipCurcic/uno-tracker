import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Auth from './auth/Auth';
import AddUser from './components/AddUser';
import Header from './components/Header';
import SessionView from './components/SessionView';
import Home from './pages/Home';
import Leaderboard from './pages/Leaderboard';
import Login from './pages/Login';
import './styles/App.scss';

function App() {
  return (
    <Auth>
      <Router>
        <Header />
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route path="/home" component={Home} />
            <Route path="/session/:id" component={SessionView} />
            <Route path="/add" component={AddUser} />
            <Route path="/leaderboard" component={Leaderboard} />
          </Switch>
        </div>
      </Router>
    </Auth>
    // <Router>
    //   <Header />
    //   <div className="App">
    //     {/* <Switch>
    //       <Route />
    //     </Switch> */}
    //   </div>
    // </Router>
  );
}

export default App;

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from './auth/Auth';
import AddUser from './components/AddUser';
import Header from './components/Header';
import SessionView from './components/SessionView';
import Home from './pages/Home';
import Login from './pages/Login';
import './styles/App.scss';

function App() {
  return (
    <Auth>
      <Router>
        <Header />
        <div className="App">
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/session/:id" component={SessionView} />
            <Route path="/add" component={AddUser} />
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

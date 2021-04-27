import { Route, Router, Switch } from 'react-router';
import Auth from './auth/Auth';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import './styles/App.scss';

function App() {
  return (
    <Auth>
      <Header />
      <div className="App">
        <Home />
      </div>
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

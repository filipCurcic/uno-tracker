import { Route, Router, Switch } from 'react-router';
import Header from './components/Header';
import Home from './pages/Home';
import './styles/App.scss';

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Home />
      </div>
    </>
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

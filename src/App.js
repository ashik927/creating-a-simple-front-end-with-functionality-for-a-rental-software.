import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShowAllData from './components/AllDataShow/ShowAllData';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import RecordDataShow from './components/RecordData/RecordDataShow';

function App() {
  return (
    <>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/record">Record Data</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
              <ShowAllData/>
          </Route>
          <Route path="/record">
            <RecordDataShow/>
          </Route>
        </Switch>
      </div>
    </Router>
    {/* <ShowAllData/> */}
    </>
  );
}

export default App;

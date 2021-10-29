import Accueil from './components/accueil';
import ListDeparts from './components/listdeparts';
import Propos from './components/apropos';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Photos from './components/photo';
import Hitdeatils from './components/hitdetails';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/propos">A propos</Link>
            </li>
            <li>
              <Link to="/departements">Departements</Link>
            </li>
            <li>
              <Link to="/photos">Photos</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/propos">
            <Propos />
          </Route>
          <Route path="/departements">
            <ListDeparts />
          </Route>
          <Route path="/photos">
            <Photos />
          </Route>
          <Route exact path="/details/:id" component={Hitdeatils} />
          <Route path="/">
            <Accueil />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

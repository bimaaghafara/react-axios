import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// pages
import LoginPage from "./modules/login";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/profile">
              Profile
            </Route>
            <Route path="/">
              Home
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;

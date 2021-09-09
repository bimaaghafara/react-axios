import React from 'react';
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
import LoginPage from "src/modules/login";

// components
import { Toast } from 'primereact/toast';
import Loader from 'src/components/loader';


const WindowComponent = () => {
  const [showLoader, setShowLoader] = React.useState(false);
	let toast = React.useRef(null);
	
	React.useEffect(() => {
		if (window) {
			window.toast = toast;
			window.setShowLoader = setShowLoader;
		}
	}, []);

	return (
		<>
			<Toast ref={toast} baseZIndex={2000} />
			{!!showLoader && <Loader />}
		</>
	);
}


function App() {
  return (
    <div className="App">
      <WindowComponent />
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

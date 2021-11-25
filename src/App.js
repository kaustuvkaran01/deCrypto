import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Layout } from "antd";

import {
  Navbar,
  HomePage,
  Cryptocurrencies,
  News,
  CryptoDetails,
} from "./components";

function App() {
  // Write new routes by adding a route tag underneath the home route by doing something like this:
  // <Route path="<YOUR_PATH_URL>" component={<NAME_OF_COMPONENT>}/>
  return (
    <div className="App">
      <Router>
        <div className="navbar">
          <Navbar />
        </div>
        <div className="main">
          <Layout>
            <div className="routes">
              <Switch>
                <Route exact="/" component={HomePage} />
                <Route exact="/cryptocurrencies" component={Cryptocurrencies} />
                <Route
                  exact="/cryptocurrencies/:id"
                  component={CryptoDetails}
                />
                <Route exact="/" component={News} />
              </Switch>
            </div>
          </Layout>
        </div>
        <div className="footer"></div>
      </Router>
    </div>
  );
}

export default App;

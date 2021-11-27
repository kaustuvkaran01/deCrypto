import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Layout, Typography, Space } from "antd";

import {
  Navbar,
  HomePage,
  Cryptocurrencies,
  News,
  CryptoDetails,
  Exchanges,
} from "./components";

function App() {
  // Write new routes by adding a route tag underneath the home route by doing something like this:
  // <Route path="<YOUR_PATH_URL>" component={<NAME_OF_COMPONENT>}/>
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route
                exact
                path="/cryptocurrencies"
                component={Cryptocurrencies}
              />
              <Route
                exact
                path="/cryptocurrencies/:id"
                component={CryptoDetails}
              />
              <Route exact path="/news" component={News} />
              <Route exact path="/exchanges" component={Exchanges} />
            </Switch>
          </div>
        </Layout>
        <div
          className="footer"
          level={5}
          style={{ color: "white", textAlign: "center" }}
        >
          <Typography.Title>
            deCrypto
            <br />
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;

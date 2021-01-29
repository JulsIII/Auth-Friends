import { Switch, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import FriendsPage from "./components/FriendsPage";
import PrivateRoute from "./components/PrivateRoute";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <PrivateRoute path="/friends" component={FriendsPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/" component={LoginPage} />
      </Switch>
    </div>
  );
}

export default App;

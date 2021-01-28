import { Switch, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import FriendsPage from "./components/LoginPage";
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <PrivateRoute path='/friends' component={FriendsPage}/>
        <Route path="/login" components={LoginPage} />
      </Switch>
    </div>
  );
}

export default App;

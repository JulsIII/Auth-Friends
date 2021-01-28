import { Switch, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" components={LoginPage} />
      </Switch>
    </div>
  );
}

export default App;

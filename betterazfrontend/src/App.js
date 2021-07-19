import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "./components/Login";
import Banner from "./components/Banner";
import News from "./components/News";
import Events from "./components/Events";
import Locations from "./components/Locations"

import './App.css'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Switch>
      <Route path="/login" component={Login} />
      </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;

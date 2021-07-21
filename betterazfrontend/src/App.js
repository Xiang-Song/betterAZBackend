import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "./components/Login";
import Home from './components/Home'

import './App.css'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Switch>
      <Route path="/admin" component={Login} />
      <Route path="/home" component={Home} />
      </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;

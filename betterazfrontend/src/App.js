import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import Login from "./components/Login"
import Home from './components/Home'
import News from './components/News'
import SingleNews from "./components/SingleNews"
import { BAProvider } from "./context/BAcontext"

import './App.css'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <BAProvider>
      <Switch>
      <Route path="/admin" component={Login} />
      <Route path="/home" component={Home} />
      <Route path="/news" component={News} />
      <Route path="/newsdetails/:id" component={SingleNews} />
      </Switch>
      </BAProvider>
      </BrowserRouter>
    </div>
  )
}

export default App;

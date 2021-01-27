import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import Login from '../pages/Login'
import Home from '../pages/home/Home'

const RouterApp = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Login/>
          </Route>

          <Route path="/home">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default RouterApp
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import Login from '../pages/login/Login'
import Home from '../pages/home/Home'
import { useState } from 'react'

const RouterApp = () => {
  const [username, setUsername] = useState('')

  return (
    <Router>
      <div style={{
        minHeight: '100vh',
        minWidth: '100vw'
      }}>

          <Switch>
            <Route exact path="/">
              {
                username !== "" ?
                  <Redirect to={'/home'} />
                  :
                  <Login setUsername={setUsername}/>
              }
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
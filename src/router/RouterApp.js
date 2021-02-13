import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import Login from '../pages/login/Login'
import Home from '../pages/home/Home'
import Register from '../pages/register/Register'

const RouterApp = () => {
  const [loginUser, setLoginUser] = React.useState(false)
  console.log(setLoginUser)
  return (
    <Router>
      <div
        style={{
          height: '100%',
        }}
      >
        <Switch>
          <Route exact path='/'>
            {!loginUser ? <Redirect to={'/login'} /> : <Home userData={''} />}
            <Home userData={''} />
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default RouterApp

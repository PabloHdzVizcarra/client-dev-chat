import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import Login from '../pages/login/Login'
import Home from '../pages/home/Home'
import checkUserData from './helpers/checkUserData'

const RouterApp = () => {
  const [userData, setUserData] = React.useState({
    username: '',
    room: '',
  })
  return (
    <Router>
      <div
        style={{
          height: '100%',
        }}
      >
        <Switch>
          <Route exact path='/'>
            {checkUserData(userData) ? (
              <Redirect to={'/home'} />
            ) : (
              <Login setUserData={setUserData} />
            )}
          </Route>

          <Route path='/home'>
            {!checkUserData(userData) ? (
              <Redirect to={'/'} />
            ) : (
              <Home userData={userData} />
            )}
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default RouterApp

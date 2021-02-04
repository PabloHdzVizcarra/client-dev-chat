import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import Login from '../pages/login/Login'
import Home from '../pages/home/Home'
import { useState } from 'react'

const RouterApp = () => {
  const [username, setUsername] = useState('')
  const [room, setRoom] = useState('')

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/'>
            {username !== '' ? (
              <Redirect to={'/home'} />
            ) : (
              <Login setUsername={setUsername} setRoom={setRoom} />
            )}
          </Route>

          <Route path='/home'>
            {username === '' ? (
              <Redirect to={'/'} />
            ) : (
              <Home username={username} roomID={room} />
            )}
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default RouterApp

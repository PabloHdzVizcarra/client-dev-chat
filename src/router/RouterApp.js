import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import Login from '../pages/login/Login'
import Home from '../pages/home/Home'

const RouterApp = () => {
  const [username, setUsername] = React.useState('')
  const [colorUser, setColorUser] = React.useState('')
  const [room, setRoom] = React.useState('')

  return (
    <Router>
      <div
        style={{
          height: '100%',
        }}
      >
        <Switch>
          <Route exact path='/'>
            {username !== '' ? (
              <Redirect to={'/home'} />
            ) : (
              <Login
                setUsername={setUsername}
                setRoom={setRoom}
                setColorUser={setColorUser}
              />
            )}
          </Route>

          <Route path='/home'>
            {username === '' ? (
              <Redirect to={'/'} />
            ) : (
              <Home username={username} roomID={room} userColor={colorUser} />
            )}
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default RouterApp

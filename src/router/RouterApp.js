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
import useToken from '../hooks/useToken/useToken'
import autologin from './helpers/callAuth'

const RouterApp = () => {
  const [dataUser, setDataUser] = React.useState({})
  const [authenticated, setAuthenticated] = React.useState(false)
  const { token, setToken } = useToken()

  React.useEffect(() => {
    if (Object.keys(dataUser).length) {
      setAuthenticated(true)
    }
  }, [dataUser])

  React.useEffect(() => {
    autologin(token).then((data) => {
      console.log(data)
    })
  }, [token])

  console.log(' APP Router')
  return (
    <Router>
      <div
        style={{
          height: '100%',
        }}
      >
        <Switch>
          <Route exact path='/'>
            {!authenticated ? (
              <Redirect to={'/login'} />
            ) : (
              <Home userData={{}} />
            )}
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
          <Route path='/login'>
            {authenticated ? (
              <h1>User Login</h1>
            ) : (
              <Login setToken={setToken} setDataUser={setDataUser} />
            )}
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default RouterApp

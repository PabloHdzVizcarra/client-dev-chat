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
import autologin from './helpers/autologin'
import Main from '../pages/main/Main'

const RouterApp = () => {
  const [dataUser, setDataUser] = React.useState({
    _id: '',
    name: '',
    email: '',
    password: '',
    color: '',
    socket_id: '',
    room: '',
    list_chat_rooms: '',
    chat_rooms_created: '',
  })
  const [authenticated, setAuthenticated] = React.useState(false)
  const { token, setToken } = useToken()

  React.useEffect(() => {
    if (dataUser.name) {
      setAuthenticated(true)
    }
  }, [dataUser.name])

  React.useEffect(() => {
    autologin(token, setDataUser)
      .then((data) => {
        if (!data) return
        setDataUser(data.user)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [token])

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
              <Main userData={dataUser} />
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

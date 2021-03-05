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
import SelectRoom from '../pages/SelectRoom'
import Spinner from '../components/atoms/Spinner/Spinner'

const RouterApp = () => {
  const [dataUser, setDataUser] = React.useState({
    _id: '',
    name: '',
    email: '',
    password: '',
    color: '',
    socket_id: '',
    room: '',
    list_chat_rooms: [],
    chat_rooms_created: [],
  })
  const [authenticated, setAuthenticated] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(true)
  const { token, setToken } = useToken()

  React.useEffect(() => {
    if (dataUser.room !== '') {
      setAuthenticated(true)
    }
  }, [dataUser])

  React.useEffect(() => {
    autologin(token, setDataUser)
      .then((data) => {
        if (!data) return
        setDataUser(data.user)
        setIsLoading(false)
      })
      .catch(console.log)
  }, [token])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <Router>
      <div
        style={{
          height: '100%',
          width: '100%',
        }}
      >
        <Switch>
          <Route exact path='/'>
            {!authenticated ? (
              <Redirect to={'/login'} />
            ) : (
              <Home userData={dataUser} />
            )}
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
          <Route path='/login'>
            {authenticated ? (
              <Redirect to='/select-room' />
            ) : (
              <Login setToken={setToken} setDataUser={setDataUser} />
            )}
          </Route>
          <Route path='/select-room'>
            <SelectRoom
              listChatRooms={dataUser.chat_rooms_created}
              setDataUser={setDataUser}
              setAuthenticated={setAuthenticated}
            />
          </Route>

          <Redirect to='login' />
        </Switch>
      </div>
    </Router>
  )
}

export default RouterApp

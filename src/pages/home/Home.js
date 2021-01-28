import HomeTemplate from '../../components/templates/HomeTemplate'

const Home = ({username, roomID}) => {
  return (
    <HomeTemplate roomID={roomID} username={username}/>
  )
}

export default Home
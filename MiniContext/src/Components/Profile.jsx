import React,{useContext} from 'react'
import UserContext from '../Contexts/UserContext'
function Profile() {
  const {user} = useContext(UserContext)
  if(!user) return <div>please login please</div>
  return <div>Welcome {user.username}</div>
}

export default Profile
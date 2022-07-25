import { useState, useEffect } from 'react'
import { getAuth } from 'firebase/auth'

function Profile() {

  const auth = getAuth()
  const [user, setUser] = useState('')

  useEffect(() => {

    setUser(auth.currentUser);

  }, [])


  return user ? <h1>{user.displayName}</h1> : <h1>Not logged In</h1>
}

export default Profile
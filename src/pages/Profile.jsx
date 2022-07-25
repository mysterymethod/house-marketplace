import { useState, useEffect, useRef } from 'react'
import { getAuth, updateProfile } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { updateDoc, doc } from 'firebase/firestore'
import { db } from '../firebase.config'
import {toast} from 'react-toastify'

function Profile() {

  const auth = getAuth()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email
  })

  const [changeDetail, setChangeDetail] = useState(false)

  const { name, email } = formData

  const clickHandler = () => {
    auth.signOut()

    navigate('/')
  }

  const onSubmit = async () => {
    try {
      

      //UPDATE NAME
      if (auth.currentUser.displayName !== name) {
        //update display name in firebase
        await updateProfile(auth.currentUser, {
          displayName: name
        })

        //update in firestore
        const userRef = doc(db, 'users', auth.currentUser.uid)
        await updateDoc(userRef, {
          name: name
        })
      }


      //UPDATE EMAIL
      if (auth.currentUser.email !== email) {
        //update display name in firebase
        await updateProfile(auth.currentUser, {
          email: email
        })

        //update in firestore
        const userRef = doc(db, 'users', auth.currentUser.uid)
        await updateDoc(userRef, {
          email: email
        })
      }

    } catch (error) {
      toast.error('Could not update Profile Details')
    }
  }

  const onChangeHandler = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.id]: event.target.value
    }))
  }


  // return user ? <h1>{user.displayName}</h1> : <h1>Not logged In</h1>
  return (
    <>
      <div className="u-container">
        <header className='profile-header'>
          <p className="primary-heading">My Profile</p>
          <button className='logout-button' type='button' onClick={clickHandler}>Logout</button>
        </header>
      </div>
      <div className="personal-detail u-container">
        <p className='personal-detail-text plain-text'>Personal Details</p>
        <p
          className='change-personal-detail plain-text-green'
          onClick={() => {
            changeDetail && onSubmit()
            setChangeDetail((prevState) => !prevState)
          }}>
          {changeDetail ? 'Done' : 'Change'}
        </p>
      </div>

      <div className='u-container' >
        <form>
          <input
            type='text'
            id='name'
            className={changeDetail ? 'name-input' : 'name-input-disabled'}
            disabled={!changeDetail}
            value={name}
            onChange={onChangeHandler}
          />
          <input
            type='email'
            id='email'
            className={changeDetail ? 'email-input u-margin-top-medium' : 'name-input-disabled u-margin-top-medium'}
            disabled={!changeDetail}
            value={email}
            onChange={onChangeHandler}
          />
        </form>
      </div>


    </>

  )
}

export default Profile
import { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { toast } from 'react-toastify'

import visibilityIcon from '../assets/svg/visibilityIcon.svg'
import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg'
import { Link, useNavigate } from 'react-router-dom'
import { db } from '../firebase.config'
import { setDoc, doc, serverTimestamp } from 'firebase/firestore'



function SignUp() {

  //STATES
  const [showPass, setShowPass] = useState(true)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })

  const navigate = useNavigate()

  const { name, email, password } = formData

  const handleChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.id]: event.target.value
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      //CREATING AUTH OBJECT
      const auth = getAuth()

      //REGISTERING THE USER, IT RETURNS PROMISE.
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)

      //GET ACTUAL USER
      const user = userCredential.user

      //UPDATING DISPLAY NAME
      updateProfile(auth.currentUser, {
        displayName: name
      })


      //CREATING COPY OF FORMDATA, STORING IN THE SERVER DATABASE
      const formDataCopy = { ...formData }
      delete formDataCopy.password
      formDataCopy.timestamp = serverTimestamp()

      await setDoc(doc(db, 'users', user.uid), formDataCopy)


      //REDIRECTING TO HOME PAGE
      navigate('/')

    } catch (error) {
      toast.error('Something went wrong with registration.')
    }


  }

  return (
    <>
      <div className="u-container">
        <p className='primary-heading'>welcome back!</p>

        <form onSubmit={handleSubmit}>
          {/* NAME INPUT */}
          <input
            type="text"
            className='name-input u-margin-top-medium'
            placeholder='Name'
            id='name'
            onChange={handleChange}
            value={name}
          />

          {/* EMAIL INPUT */}
          <input
            type="email"
            className='email-input u-margin-top-medium'
            placeholder='Email'
            id='email'
            onChange={handleChange}
            value={email}
          />

          {/* PASSWORD INPUT */}
          <div className="password-div">
            <input
              type={showPass ? 'text' : 'password'}
              className='password-input u-margin-top-medium'
              placeholder='Password'
              id='password'
              onChange={handleChange}
              value={password}
            />
            <img
              src={visibilityIcon}
              alt="Show Password"
              className='show-password'
              onClick={() => setShowPass((prevState) => {
                return !prevState
              })}
            />
          </div>

          {/* <Link to='/forgot-password' className='text-link-styler forgot-password'>
            <p>Forgot Password</p>
          </Link> */}


          {/* SUBMIT BUTTON */}
          <div className="signup-div u-margin-top-high">
            <p className='signup-text'>Sign Up</p>
            <button className="signup-button" type='onSubmit'>
              <ArrowRightIcon fill='white' />
            </button>
          </div>
        </form>


        {/* SIGN UP INSTEAD LINK */}
        <div className="u-margin-top-high">
          <Link to='/sign-in' className='text-link-styler register-link'>
            <p>Sign In Instead</p>
          </Link>
        </div>


      </div>
    </>
  )
}

export default SignUp
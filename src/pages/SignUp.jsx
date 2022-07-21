import { useState } from 'react'

import visibilityIcon from '../assets/svg/visibilityIcon.svg'
import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg'
import { Link } from 'react-router-dom'

function SignUp() {

  //STATES
  const [showPass, setShowPass] = useState(true)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })

  const { name, email, password } = formData

  const handleChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.id]: event.target.value
    }))
  }

  return (
    <>
      <div className="u-container">
        <p className='primary-heading'>welcome back!</p>

        <form>
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

          <div className="signup-div u-margin-top-high">
            <p className='signup-text'>Sign Up</p>
            <button className="signup-button">
              <ArrowRightIcon fill='white' />
            </button>
          </div>
        </form>

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
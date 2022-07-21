import { useState } from 'react'

import visibilityIcon from '../assets/svg/visibilityIcon.svg'
import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg'
import { Link } from 'react-router-dom'

function SignIn() {

  //STATES
  const [showPass, setShowPass] = useState(true)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const { email, password } = formData

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
          <input
            type="email"
            className='email-input u-margin-top-medium'
            placeholder='Email'
            id='email'
            onChange={handleChange}
            value={email}
          />

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

          <Link to='/forgot-password' className='text-link-styler forgot-password'>
            <p>Forgot Password</p>
          </Link>

          <div className="signin-div u-margin-top-high">
            <p className='signin-text'>Sign In</p>
            <button className="signin-button">
              <ArrowRightIcon fill='white' />
            </button>
          </div>
        </form>

        <div className="u-margin-top-high">
          <Link to='/sign-up' className='text-link-styler register-link'>
            <p>Sign Up Instead</p>
          </Link>
        </div>


      </div>
    </>
  )
}

export default SignIn
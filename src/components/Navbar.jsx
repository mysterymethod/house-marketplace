import { useNavigate, useLocation } from 'react-router-dom'

import { ReactComponent as ExploreIcon } from '../assets/svg/exploreIcon.svg'
import { ReactComponent as OfferIcon } from '../assets/svg/localOfferIcon.svg'
import { ReactComponent as PersonOutlineIcon } from '../assets/svg/personOutlineIcon.svg'

function Navbar() {

  const navigate = useNavigate()
  const location = useLocation()

  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true
    }
    return false
  }

  return (
    <footer className='navbar'>
      <nav className='navbar__Nav'>
        <ul className='navbar__list'>
          <li className='navbar__items' onClick={() => navigate('/')}>
            <ExploreIcon
              fill={pathMatchRoute('/') ? 'white' : 'grey'}
              height='36px'
              width='36px'
            />
            <p style={{ color: pathMatchRoute('/') ? 'white' : 'grey' }}>Explore</p>
          </li>
          <li className='navbar__items' onClick={() => navigate('/offers')}>
            <OfferIcon
              fill={pathMatchRoute('/offers') ? 'white' : 'grey'}
              height='36px'
              width='36px'
            />
            <p style={{ color: pathMatchRoute('/offers') ? 'white' : 'grey' }}>OfferIcon</p>
          </li>
          <li className='navbar__items' onClick={() => navigate('/profile')}>
            <PersonOutlineIcon
              fill={pathMatchRoute('/profile') ? 'white' : 'grey'}
              height='36px'
              width='36px'
            />
            <p style={{ color: pathMatchRoute('/profile') ? 'white' : 'grey' }}>Profile</p>
          </li>
        </ul>
      </nav>

    </footer>
  )
}

export default Navbar
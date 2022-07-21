import React from 'react'

import { ReactComponent as ExploreIcon } from '../assets/svg/exploreIcon.svg'
import { ReactComponent as OfferIcon } from '../assets/svg/localOfferIcon.svg'
import { ReactComponent as PersonOutlineIcon } from '../assets/svg/personOutlineIcon.svg'

function Navbar() {
  return (
    <footer className='navbar'>
      <nav className='navbar__Nav'>
        <ul className='navbar__list'>
          <li className='navbar__items'>
            <ExploreIcon fill='white' height='36px' width='36px' />
            <p>Explore</p>
          </li>
          <li className='navbar__items'>
            <OfferIcon fill='white' height='36px' width='36px' />
            <p>OfferIcon</p>
          </li>
          <li className='navbar__items'>
            <PersonOutlineIcon fill='white' height='36px' width='36px' />
            <p>Profile</p>
          </li>
        </ul>
      </nav>

    </footer>
  )
}

export default Navbar
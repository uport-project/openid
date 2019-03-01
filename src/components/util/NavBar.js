import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import uportLogo from '../../assets/img/uport-logo.svg'

// Header bar with login/logout capability and conditional navigation
const NavBar = ({doLogout}) => {
  return (
    <nav>
      <Link to="/">
        <img id="logo" alt="uport-logo" src={uportLogo}/>
        <div>uPort OpenID-Connect Helper</div>
      </Link>
    </nav>
  )
}

export default connect(
  (state) => ({}),
  (dispatch) => ({})
)(NavBar)
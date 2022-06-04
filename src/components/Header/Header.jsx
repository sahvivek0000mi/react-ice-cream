import React from 'react'
import logo from '../../assets/images/logo.svg'
import reactLogo from '../../assets/images/react.svg'
import headerCss from './Header.module.css'

const Header = () => {
  return (
    <header>
        <div className="container">
            <div>
                <img src={logo} alt="Logo" className={headerCss.logo} />
            </div>
            <div className="textRight">
                <img src={reactLogo} alt="React" className={headerCss.reactLogo} />
                <strong>React</strong>
            </div>
        </div>
    </header>
  )
}

export default Header;
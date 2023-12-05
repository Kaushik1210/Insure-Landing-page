import React, { useRef } from 'react'
import './navbar.css'
import images from '../../images'


const Navbar = () => {

  const[toggleMenu,setToggleMenu]=React.useState(false)

  const menuRef=useRef();
  const burgerRef=useRef();

  window.addEventListener("click",(e)=>{
    if(e.target !== menuRef.current && e.target !== burgerRef.current){
      setToggleMenu(false)
    }
  })

  return (
    <>
      <div className="navbar">
        <div >
          <img className="header_logo" src={images.logo} alt="header_logo" />
        </div>

        <div className="menu">
          <a href="#">How we work</a>
          <a href="#">Blog</a>
          <a href="#">Account</a>
          <button className='navbar_button'>view plans</button>
          
        </div>
        <div className="hamburger"  onClick={()=>setToggleMenu(!toggleMenu)}>
          {toggleMenu ? <img ref={burgerRef} src={images.close} alt="close" /> : <img ref={burgerRef} src={images.hamburger} alt="hamburger" /> }
        </div>

        {toggleMenu && (
          
          <div ref={menuRef} className="small_devive_menu">
            <a href="#">How we work</a>
          <a href="#">Blog</a>
          <a href="#">Account</a>
          <a className='view_plan_button'>view plans</a>
          <img className='bgpatternmobilenav' src={images.bgpatternmobilenav} alt="bgpatternmobilenav.svg" />
          </div>
          
          
        )

        }
      </div>
    </>
  )
}

export default Navbar

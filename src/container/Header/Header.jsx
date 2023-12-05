import React from 'react'
import './header.css'
import images from '../../images'
import Navbar from '../Navbar/Navbar'

const Header = () => {
  return (
    <div className='header'>
      <div>
      <Navbar/>
      </div>
      
      <div >
            <img className="header_mobile_img"  src={images.imageintromobile} alt="image intro mobile" />
        </div>
      
      <div className="header_bg">
        
        <div className="header_content">

        

        <div className='horizontal_line white' />
        <p className='heading header_heading'>Humanizing <br />your insurance.</p>
        <p className='body header_para'>
        Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that’s right for you. Ensure you and your loved ones are protected.
        </p>
        <a href='#' className="button header_button">
        View plans
        </a>

        <img className='bg_pattern_right_mobile' src={images.bgpatternintrorightmobile} alt="bg pattern intro right mobile" />
        <img className='bg_pattern_left_mobile' src={images.bgpatternintroleftmobile} alt="bg pattern intro left mobile" />
        
      </div>

        

        <div >
            <img className="header_img" src={images.imageintrodesktop} alt="image intro desktop" />
        </div>
        </div>
        <img className='bg_pattern_right' src={images.bgpatternintrorightdesktop} alt="bg pattern intro right desktop" />
        <img className='bg_pattern_left' src={images.bgpatternintroleftdesktop} alt="bg pattern intro left desktop" />
        
       
        
        
    </div>
  )
}

export default Header

import React from 'react'
import './footer.css'
import images from '../../images'


const Footer = () => {
  return (
    <div className='bg_footer'>
      <div className="footer">
          <div className="top_footer">
            <div>
              <img src={images.logo} alt="logo" />
            </div>

            <div className="icons">


              <img src={images.iconfacebook} alt="fb" />
              <img src={images.icontwitter} alt="twite" />
              <img src={images.iconpinterest} alt="pin" />
              <img src={images.iconinstagram} alt="insta" />
            </div>
          </div>

          <div className="horizontal_line footer_line"></div>


          <div className="bottom_footer">
            <div className="footer_details">
                <p className="body fhead">
                Our company
                </p>
              
              <div className="footer_content">
                <a href="#">How we work</a>
                <a href="#">Why Insure?</a>
                <a href="#">View plans</a>
                <a href="#">Reviews </a>
              </div>
            </div>
            <div className="footer_details">
              <p className="body fhead">
              Help me
              </p>
              <div className="footer_content">
                <a href="#">FAQ </a>
                <a href="#">Terms of use</a>
                <a href="#">Privacy policy</a>
                <a href="#">Cookies</a>                
              </div>
            </div>
            <div className="footer_details">
              <p className="body fhead">
              Contact 
              </p>
              <div className="footer_content">
                <a href="#">Sales </a>
                <a href="#">Support </a>
                <a href="#">Live chat</a>
              </div>
            </div>
            <div className="footer_details">
              <p className="body fhead">
              Others 
              </p>
              <div className="footer_content">
                <a href="#">Careers </a>
                <a href="#">Press</a>
                <a href="#">Licenses</a>
              </div>
            </div>
          </div>
          
      </div>
      <div >

      <img className='bg_pattern_footer_desk' src={images.bgpatternfooterdesktop} alt="" />
      <img className='bg_pattern_footer_mobile' src={images.bgpatternfootermobile} alt="" />
      </div>
    </div>
  )
}

export default Footer

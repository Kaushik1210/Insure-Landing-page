import React from 'react'
import './midsection.css'
import images from '../../images'

const Midsection = () => {
  return (
    <>
      <div className="midsection">

        <div className="horizontal_line black"/>
        <p className="heading ms_heading">We’re different</p>


        <div className="details">
          <div className="advantages">
            <img src={images.iconsnappyprocess} alt="" />
            <p className="heading details_heading">
            Snappy Process
              </p>    
              <p className="body advantages_para">
              Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms.
                </p>                              
          </div>
 
          <div className="advantages">
              <img src={images.iconaffordableprices} alt="" />
              <p className="heading details_heading">
              Affordable Prices
              </p>
                <p className="body advantages_para">
                We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.
                </p>
          </div>
          <div className="advantages">
              <img src={images.iconpeoplefirst} alt="" />
              <p className="heading details_heading">
              People First
              </p>
                <p className="body advantages_para">
                Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it.
                </p>
          </div>
        </div>

        <div className="howwework">
          
            <p className="heading hww_heading">
            Find out more <br />about how we work
            </p>
            <a className='button' href='#'>how we work</a>
            <img className='hwd' src={images.bgpatternhowweworkdesktop} alt="bgpatternhowweworkdesktop" />
            <img className='hwm' src={images.bgpatternhowweworkmobile} alt="bgpatternhowweworkmobile" />
        </div>

      </div>
    </>
  )
}

export default Midsection
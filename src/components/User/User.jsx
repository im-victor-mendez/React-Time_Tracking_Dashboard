import React from 'react'
import './User.scss'
import JEREMY_IMG from "../../assets/image-jeremy.png";

function User({ handleChange }) {
  return (
    <section id='user'>
        <div id='user-info'>
            <img src={JEREMY_IMG} alt="" />
            
            <div id='user-text'>
              <p>Report for</p>
              <h1>Jeremy Robson</h1>
            </div>
        </div>

        <div id='time-lapse'>
          {/* To add onClick actions */}
          <li className='time-lapse' onClick={() => handleChange('daily')}>Daily</li>
          <li className='time-lapse' onClick={() => handleChange('weekly')}>Weekly</li>
          <li className='time-lapse' onClick={() => handleChange('monthly')}>Monthly</li>
        </div>
    </section>
  )
}

export default User
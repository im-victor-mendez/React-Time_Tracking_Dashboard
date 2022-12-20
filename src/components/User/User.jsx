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
          <label onClick={() => handleChange('daily')}>
            Daily
            <input type="radio" name="time-lapse" id="daily" />
          </label>

          <label onClick={() => handleChange('weekly')}>
            Weekly
            <input type="radio" name="time-lapse" id="weekly" />
          </label>

          <label onClick={() => handleChange('monthly')}>
            Monthly
            <input type="radio" name="time-lapse" id="monthly" />
          </label>
        </div>
    </section>
  )
}

export default User
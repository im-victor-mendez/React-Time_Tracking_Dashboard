import { useState } from 'react';
import './App.scss'

import User from "./components/User/User";
import Activity from "./components/Activity/Activity";
import data from "./data";

function App() {
  const [activities, setActivities] = useState(data)
  const [timeset, setTimeset] = useState('weekly')

  function handleChange(timeset) { setTimeset(timeset) }

  return (
    <div className="App">
      <User handleChange={handleChange} />
      
      <section id='activities'>
        { activities.map((activity, key) => <Activity key={key} title={activity.title} timeframes={activity.timeframes} timeset={timeset} />) }
      </section>
    </div>
  )
}

export default App

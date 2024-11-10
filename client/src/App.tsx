import './App.css'
import {useEffect, useState} from "react";
import axios from "axios";

function App() {
    const [activities, setActivities] = useState([])
    
    useEffect(() => {
        axios.get('http://localhost:5000/api/activities').then(res => setActivities(res.data))   
    }, [])

  return (
    <>
     <h1>Reactivities</h1>
        <ul>
            {activities.map((activity: any) => (
                <li key={activity.id}>
                    {activity.title}: {activity.description}
                </li>
            ))}
        </ul>
    </>
  )
}

export default App


import Navbar from './Components/Navbar'

import './App.css'
import PlayersList from './Components/PlayersList'

function App() {
 const players = [{
  firstName: "John",
  lastName: "Doe",
  role: "Coach",
  joined: "December 2015",
  id: 1
 }, {
  firstName: "Jane",
  lastName: "Doe",
  role: "Player",
  joined: "May 2020",
  id: 2
 }, {
  firstName: "James",
  lastName: "Dean",
  role: "QB",
  joined: "March 2017",
  id: 3
 }]

 const practiceLocation = "Roxy Park"

  return (
 <div className="app">
  <Navbar />
  <PlayersList players={players} location={practiceLocation}/>
  <div>
 
  </div>

 </div>
  )
}

export default App

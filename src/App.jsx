import FriendList from './Components/FriendList/FriendList'
import friends from './friends'

import Statistics from './Components/Statistics/Statistics'
import desk from './desk'

import './App.css'

function App() {

  return (
    <>
      <div style={{backgroundColor: 'white'}}>
        <h1 style={{color: 'black', "fontSize": 60, margin: '120px'}}>UPLOAD STATS</h1>
        <ul style={{display: 'flex', justifyContent: 'space-between'}}>{desk.map((statistics)=> {
          return (
            <Statistics 
            key={statistics.id}
            id={statistics.id}
            label={statistics.label}
            percentage={statistics.percentage}
            />
          )
        })}</ul>
      </div>
        <ul style={{backgroundColor: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', "gap": 20, "padding": 20}}> {friends.map((frend)=> {
          return (
            <FriendList key={frend.id} {...frend}/>
          )
        })}</ul>
    </>
  )
}

export default App

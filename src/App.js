import axios from 'axios'
import { useEffect,useState } from 'react';
import PersonneList from './Components/PersonneList';
import './App.css';

function App() {
  const [personnes,setPersonnes]= useState([])
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res=>setPersonnes(res.data))
    .catch(err=>alert(err))
  },[])
  return (
    <div className="App">
      <PersonneList personnes={personnes}/>
    </div>
  )
}

export default App;

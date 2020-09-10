import React, {useState,useEffect} from "react";
import "./App.css";
import axios from 'axios'
import Header from './components/header'
import Content from './components/content'
import Footer from './components/footer'

function App() {
  const [apd,setapd] = useState('')
  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
    .then((res) => {
      setapd(res.data)
      console.log(res)
    }) 
  }
 )
  
  return (
    <div className="App">
      <Header data = {apd}/>
      <Content data = {apd}/>
      <Footer data = {apd}/>
    
    </div>
  );
}

export default App;

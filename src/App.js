import React from 'react';
// import "./resources/styles.css"
import Header from "./components/Header"
import Featured from "./components/Featured"
import ConcertInfo from "./components/ConcertInfo"
import Highlights from "./components/Highlights"
import Pricing from "./components/Pricing"
import Location from "./components/Location"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App" >
      <Header/>
      <Featured/>
      <ConcertInfo />
      <Highlights/>
      <Pricing/>
      <Location/>
      <Footer/>
    </div>
  );
}

// style={{ height :"1000px", backgroundColor:"#699"}}

export default App;

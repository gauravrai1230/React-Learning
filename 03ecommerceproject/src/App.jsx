import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import Card from './Components/Card'


function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Card source="https://images.pexels.com/photos/292998/pexels-photo-292998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" name="Nike" price="6,000"/>
      <Card source="https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" name="Adidas" price="8,500"/>
      <Card source="https://images.pexels.com/photos/10113084/pexels-photo-10113084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" name="Bata" price="10,500"/>
    </>
  )
}

export default App

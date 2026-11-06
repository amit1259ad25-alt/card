import React from 'react'
import Card from './component/card.jsx'
import Navbar from './component/navbar.jsx'
const App = () => {

  const user = "lalla";
  const age = 12;
  return (
   <>
   <div className = " parent" >
    <div> <Navbar/></div> 

    <Card image="https://images.unsplash.com/photo-1791395802835-6260cd020ddc?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDE%3D" user= "Kelly " age = {24} />
    
    <Card  image= "https://images.unsplash.com/photo-1779896412277-c4fd15c7a89c?q=80&w=1096&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDE%3D" user= "Halland" age ={30}/>
    <Card/>
    <Card/>
   </div>
  </>
  )
}

export default App
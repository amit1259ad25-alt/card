import React from 'react'
import image1 from'./image1.jpg'; 
const card = (props) => {
  return (
    <div className = "card"> 
       <div className="card-image"> <img src ={props.image} alt= 'this is a theme image ' ></img> </div> 
    <div className="content"> <h1> {props.user} age :  {props.age} </h1>
    <p>Lorem opsum dolor sit amet consectetur adipisicing elit. Recusandae</p>
    <hr></hr>
    <button>View Profile</button>
    </div>
    </div>
  )
}

export default card
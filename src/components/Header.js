import React from 'react'
import { Link } from "react-router-dom";


const Header = () => {


  return (
    <div className="header">
      <Link to="/students"> <button className="header">All Students</button></Link>
      <Link to="/students/new"> <button className="header">New Student</button></Link>
    </div>
  )

  //need props.payments &&... because first time we render, props.payments is undefined and
  //error: TypeError: Cannot read property 'map' of undefined
  //therefore need to check that props.payments is not first undefined

}

export default Header;

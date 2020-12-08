import React from 'react'
import { Link } from "react-router-dom";


const Header = () => {


  return (
    <div className="header">
      <Link to="/"> <button className="header">Home</button></Link>
      <Link to="/students"> <button className="header">All Students</button></Link>
      <Link to="/students/new"> <button className="header">New Student</button></Link>
    </div>
  )


}

export default Header;

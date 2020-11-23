import React from 'react'
import { Link } from "react-router-dom";


const Header = () => {


  return (
    <div class="header">
      <Link class="link-to-all-students" to="/students"> <button class="header">All Students</button></Link>
      <Link class="link-to-new-student-form" to="/students/new"> <button class="header">New Student</button></Link>

    </div>
  )

  //need props.payments &&... because first time we render, props.payments is undefined and
  //error: TypeError: Cannot read property 'map' of undefined
  //therefore need to check that props.payments is not first undefined

}

export default Header;

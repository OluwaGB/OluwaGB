import React from 'react'
import '../App.css'
import Logo from './img/react.jpg'

const Fact=()=>{

  return(  <>
    <nav>
        <div>
            <img src={Logo}/><h2>ReactFacts</h2></div>
            <h3>React Course project-1</h3>
    </nav>
    <div>
        <h>Fun Fact about React</h>
        <ul>
            <li>was first released in 2013</li>
            <li>was established by john wolke</li>
            <li>Was maintained by facebook</li>
            <li>Use in creating enterprises app including mobile apps</li>
        </ul>
    </div>
    </>)
}
export default Fact

import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'


const ButtonLink = ({ text, to }) => {
  const styleB = { 
    color: 'black', 
    textDecoration: 'none' 
  }
  return(
    <Link style={styleB} to={to}> {text} </Link>
  )
}


export default ButtonLink

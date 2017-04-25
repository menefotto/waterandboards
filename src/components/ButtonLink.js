import React from 'react'
import ReactDOM from 'react-dom'
import Link from 'react-router-dom/Link'


const ButtonLink = ({ text, to, decoration='none' }) => {
  const styleB = { 
    color: 'black', 
    textDecoration: decoration
  }
  return(
    <Link style={styleB} to={to}> {text} </Link>
  )
}


export default ButtonLink

import React from 'react'
import ReactDOM from 'react-dom'
import Link from 'react-router-dom/Link'


const ButtonLink = ({ text, to, decoration='none', color='black' }) => {
  let styleLink
  if (decoration === 'none' ){
    styleLink = { 
      color: color, 
      textDecoration: decoration
    }
  }

  return(
    <Link style={styleLink} to={to}> {text} </Link>
  )
}


export default ButtonLink

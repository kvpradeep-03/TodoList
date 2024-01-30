import React from 'react'

const Footer = () => {
const year = new Date(); // new Date  is a object.

  return (
    <footer>
        Copyright &copy; {year.getFullYear()}  
        <h1>Time: {year.getHours()}:{year.getMinutes()}:{year.getSeconds()}</h1>
    </footer>
  )
  }

export default Footer;
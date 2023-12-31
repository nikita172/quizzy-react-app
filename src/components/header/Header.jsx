import React from 'react'
import "./header.css"
import quizzyLogo from "../../assets/quiz.png"
const Header = () => {
  return (
    <header className='quizzyHeader'>
      <img className="logoImg" src={quizzyLogo} />
      <h2 className='quizzyTitle'>Easy Quizzy</h2>
    </header>
  )
}

export default Header
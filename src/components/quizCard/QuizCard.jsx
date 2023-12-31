import React from 'react'
import "./quizCard.css"
import { useNavigate } from 'react-router-dom'

const QuizCard = ({ name, noOfQuestions, maxTime, totalMarks, data }) => {

  const navigate = useNavigate();

  return (
    <div className="quiz" onClick={() => navigate(`/quiz/${data.id}`)}>
      <img className="quizPoster" src="https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg" />
      <div className="quizDetails">
        <span className='quizName'>{name}</span>
        <span>No. of questions - {noOfQuestions} (MCQ)</span>
        <span>Total Marks - {totalMarks}M</span>
        <span>Max Time - {maxTime / 60} min</span>
      </div>
    </div>
  )
}

export default QuizCard
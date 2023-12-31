import React, { useEffect, useRef, useState } from 'react'
import "./home.css"
import Header from '../../components/header/Header';
import LandingQuote from '../../components/landingQuote/LandingQuote';
import QuizCard from '../../components/quizCard/QuizCard';
import { useSelector, useDispatch } from 'react-redux'
import { getData } from '../../app/slice/dataSlice'
import ScrollToTop from '../../components/scrollToTop/ScrollToTop';

const Home = () => {

  const data = useSelector(state => state.data.value)
  const dispatch = useDispatch();
  const inputData = useRef();

  const [quizData, setQuizData] = useState();

  const inputHandler = () => {
    if (inputData.current.value == "") {
      setQuizData(data);
    } else {
      setQuizData(() => data.filter(i => i.name.toLowerCase().startsWith(inputData.current.value.toLowerCase())));
    }
  }

  useEffect(() => {
    dispatch(getData())
    setQuizData(data);
  }, [data])

  return (
    <div>
      <ScrollToTop />
      <Header />
      <LandingQuote />
      <div className='showcaseAllQuiz'>
        <div className="showCaseSeach">
          <h6 className='showcaseQuizHeading'> Here are the quizzes designed to challenge, entertain, and enlighten.</h6>
          <input className='quizSearch' placeholder='Search Quiz' ref={inputData} onChange={inputHandler} />
        </div>
        <div className='allQuiz'>
          {
            quizData && quizData.map(i => (
              <QuizCard key={i.id} noOfQuestions={i.noOfQuestions}
                totalMarks={i.totalMarks}
                maxTime={i.totalTime}
                name={i.name}
                data={i} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Home
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import "./result.css"
import ScrollToTop from '../../components/scrollToTop/ScrollToTop';

const Result = () => {

  const location = useLocation();
  const [result, setResult] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    let res = 0;
    location?.state?.answers?.map((item) => {
      location?.state?.quizData[0]?.questions.map(ele => {
        if (item.questionNo == ele.questionNo) {
          if (item.ans == ele.answer) {
            res++;
          }
        }
      })
    });
    setResult(res);
  }, [])

  return (
    <div className='resultContainer'>
      <ScrollToTop />
      <div className="resultWrapper">
        <h3 className='timeupHeading'>Time's Up!</h3>
        <span className='score'>Your score is: {result}/{location?.state?.quizData[0]?.questions.length}</span>
        <button className='goToHomeBtn' onClick={() => navigate("/")}>Explore More Quiz</button>
      </div>
    </div>
  )
}

export default Result
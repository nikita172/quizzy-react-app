import React, { useState, useEffect } from 'react';
import "./quizPortal.css";
import { useNavigate, useParams } from 'react-router-dom';
import Header from "../../components/header/Header";
import { useDispatch, useSelector } from 'react-redux';
import ScrollToTop from '../../components/scrollToTop/ScrollToTop';
import { getData } from "../../app/slice/dataSlice"

const QuizPortal = () => {

  const data = useSelector(state => state.data.value)
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();

  const [questionDetail, setQuestionDetail] = useState();

  useEffect(() => {
    dispatch(getData());
  }, [])

  useEffect(() => {
    const res = data.filter(i => i.id == params.type);
    setQuestionDetail(res);
  }, [params.type, data])

  return (
    <div className='quizPortal'>
      <ScrollToTop />
      <Header />
      <div className="coverDesc">
        <img className='coverImg' src="https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg" />
        <h1 className='welcomeTitle'>Welcome to {questionDetail && questionDetail[0]?.name}</h1>
      </div>
      <div className="quizDescription">
        <h2>Please read the description carefully :-</h2>
        <div className="desc">
          <ul>
            <li>This quiz consist of {questionDetail && questionDetail[0]?.noOfQuestions} {questionDetail && questionDetail[0]?.type} questions.</li>
            <li>Total marks will be {questionDetail && questionDetail[0]?.totalMarks} Marks.</li>
            <li>The maximum time is {questionDetail && questionDetail[0]?.totalTime / 60} minutes.</li>
            <li>Please remember, you can take this test only once.</li>
            <li>Once you start the test you cannot pause it,refresh it or leave it. so please have a good internet connection.</li>
            <li>Take copy and pen along with you to do quick calculations.</li>
            <li>Best of luck 👍🏻</li>
          </ul>
        </div>
      </div>
      <div className="startBtnContainer">
        <button className='startButton' onClick={() => navigate(`/quiz/${params.type}/questions/1`)}>Start now</button>
      </div>
    </div>
  )
}

export default QuizPortal
import React, { useEffect, useState } from 'react'
import "./quiz.css"
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import quizzyLogo from "../../assets/quiz.png"
import ScrollToTop from '../../components/scrollToTop/ScrollToTop';

const Quiz = () => {

  const data = useSelector(state => state.data.value)
  const navigate = useNavigate();
  const params = useParams();

  const [quizData, setQuizData] = useState();
  const [question, setQuestion] = useState();
  const [checked, setChecked] = useState();
  const [seconds, setSeconds] = useState(1);
  const [answers, setAnswers] = useState([]);
  const [length, setLength] = useState(0);

  useEffect(() => {
    const handleBackButton = (event) => {
      event.preventDefault();
      const allowBack = false;
      if (!allowBack) {
        alert("Browser's Navigation not allowed! Please use the Interface instead.");
      }
    };
    window.history.pushState(null, '', window.location.pathname);
    window.addEventListener('popstate', handleBackButton);
    return () => {
      window.removeEventListener('popstate', handleBackButton);
    };
  }, [navigate]);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      return (event.returnValue = 'Are you sure you want to leave?');
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    const res = data.filter(i => i.id == params.type);
    setLength(res[0].questions.length)
    setSeconds(res[0].totalTime);
    setQuizData(res);
  }, [params.type])

  useEffect(() => {
    if (seconds <= 0) {
      navigate(`/quiz/${parseInt(params.type)}/result`, { state: { answers, quizData } });
    }
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1)
    }, 1000);
    return () => clearInterval(timer);
  }, [seconds])

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60).toString().padStart(2, '0');
    const seconds = (timeInSeconds % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  useEffect(() => {
    quizData && quizData[0]?.questions.map(item => {
      if (item.questionNo == params.id) {
        setQuestion(item);
      }
    })
    let flag = false;
    answers.map(item => {
      if (item.questionNo == params.id) {
        setChecked(item.ans - 1);
        flag = true;
      }
    });
    if (!flag) {
      setChecked(-1)
    }
  }, [params, quizData])

  const selectHandler = (index, questionNo) => {
    setChecked(index);
    const arr = answers;
    let flag = false;
    arr.map(item => {
      if (item.questionNo == params.id) {
        item.ans = index + 1;
        flag = true;
      }
    })
    if (!flag) {
      setAnswers((prev) => [...prev, { questionNo, ans: index + 1 }])
    } else {
      setAnswers(arr)
    }
  }

  const handlePrev = () => {
    navigate(`/quiz/${params.type}/questions/${params.id - 1}`)
  }

  const handleNext = () => {
    const id = params.id
    navigate(`/quiz/${params.type}/questions/${parseInt(id) + 1}`)
  }

  const submitHandler = () => {
    navigate(`/quiz/${params.type}/result`, { state: { answers, quizData } });
  }

  return (
    <div className='quizContainer'>
      <ScrollToTop />
      <div className='question'>
        <div className='timer'>
          <img className="quizzyLogo" src={quizzyLogo} />
          <span>Timer-{formatTime(seconds)}</span></div>
        <div className='quizQuestion'>
          <h3 className='questionNo'>Ques:{params.id} {question?.question}</h3>
          <div >
            {
              question && question.option.map((el, index) => (
                <div className='questionsOptions' key={index}>
                  <input className='checkBox' value={el} type="checkbox"
                    checked={checked == index} onChange={() => selectHandler(index, question.questionNo)} />
                  <span className='optionsData'>{el}</span>
                </div>
              ))
            }
          </div>
          <div>
            {question?.questionNo > 1 && <button className='prevBtn' onClick={handlePrev}>previous</button>}
            {question?.questionNo < length && <button className='nextBtn' onClick={handleNext}>next</button>}
          </div>
        </div>
      </div>
      <div className='questionsPortal'>
        <h2>Go to any questions</h2>
        <div className='questionsJumpers'>
          {Array(length).fill(1).map((el, i) => (
            <div className={`questionJumper ${params.id == i + 1 ? "selectedNow" : ""}`} key={i} onClick={() => navigate(`/quiz/${params.type}/questions/${i + 1}`)}>{i + 1}</div>
          ))
          }
        </div>
        <button className="QuizSubmitBtn" onClick={submitHandler}>Submit</button>
      </div>
    </div>
  )
}

export default Quiz
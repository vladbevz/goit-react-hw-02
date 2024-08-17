import { useState } from 'react'
import './App.css'
import Description from './Description/Description'
import Feedback from './Feedback/Feedback'
import Options from './Options/Options'
import Notification from './Notification/Notification'

export default function App() {

  const [data, setData] = useState({good:0, neutral: 0, bad: 0})
  const resetFeedback =() => {
    setData({good: 0, neutral: 0, bad: 0})
  }
  const updateFeedback = feedbackType => {
    setData({...data, [feedbackType]: data[feedbackType] + 1})
  }
  const totalFeedback = data.good + data.neutral + data.bad;
  const percentOfGood = Math.round((data.good / totalFeedback) * 100)
    


  return (
    <>
    <Description/>
    <Options updateFeedback={updateFeedback} reset={resetFeedback} total={totalFeedback} />
    <Feedback good={data.good} neutral={data.neutral} bad={data.bad} total={totalFeedback} percent={percentOfGood} />
    <Notification total={totalFeedback}/>
    </>
  )
}



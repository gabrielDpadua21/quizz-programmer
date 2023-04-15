import Question from '@/components/Question'
import AnswerModel from '@/model/answer'
import QuestionModel from '@/model/question'
import { Inter } from 'next/font/google'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

const questionMock = new QuestionModel(1, 'Best Cat', [
  AnswerModel.wrong('Thor'),
  AnswerModel.wrong('Lucyfer'),
  AnswerModel.wrong('Zeuzz'),
  AnswerModel.correct('Frajola')
])

export default function Home() {
  const [question, setQuestion] = useState(questionMock);
  

  const on_response = (index: number) => {
    setQuestion(question.respond_with(index));
    console.log(question);
  }

  const time_lost = () => {
    if(question.is_not_responded) {
      setQuestion(question.respond_with(-1));
    }
  }
  
  return (
    <>
      <div className='root-container'>
        <Question 
          value={question} 
          on_response={on_response}
          time_lost={time_lost}
          time_for_response={50}
        />
      </div>
    </>
  )
}

import Question from '@/components/Question'
import Questionary from '@/components/Questionary'
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
  
  const set_question_responded = (question: QuestionModel) => {
    
  }

  const go_next_question = () => {
    
  }
 
  return (
    <>
      <div className='root-container'>
        <Questionary 
          question={question}
          last_question={false}
          set_question_responded={set_question_responded}
          go_next_question={go_next_question}
        />
      </div>
    </>
  )
}

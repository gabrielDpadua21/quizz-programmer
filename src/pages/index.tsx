import Question from '@/components/Question'
import AnswerModel from '@/model/answer'
import QuestionModel from '@/model/question'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  const testQuestion = new QuestionModel(1, 'Best Cat', [
    AnswerModel.wrong('Thor'),
    AnswerModel.wrong('Lucyfer'),
    AnswerModel.wrong('Zeuzz'),
    AnswerModel.correct('Frajola')
  ])
  
  return (
    <>
      <div className='root-container'>
        <Question value={testQuestion}/>
      </div>
    </>
  )
}

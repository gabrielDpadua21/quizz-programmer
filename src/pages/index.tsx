import Questionary from '@/components/Questionary'
import AnswerModel from '@/model/answer'
import QuestionModel from '@/model/question'
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

const questionMock = new QuestionModel(1, 'Best Cat', [
  AnswerModel.wrong('Thor'),
  AnswerModel.wrong('Lucyfer'),
  AnswerModel.wrong('Zeuzz'),
  AnswerModel.correct('Frajola')
])

const BASE_URL = 'http://localhost:3000/api'

export default function Home() {
  const [question, setQuestion] = useState<QuestionModel>(questionMock);
  const [idsOfQuestions, setIdsOfQuestions] = useState<number[]>([]);
  const [correctAnswers, setCorrectAnswers] = useState<number>(0);
  
  const loadQuestionsIds = async () => {
    const response = await fetch(`${BASE_URL}/questionary`);
    const questionsIds = await response.json();
    setIdsOfQuestions(questionsIds);
  }

  const loadQuestion = async (questionId: number) => {
    const response = await fetch(`${BASE_URL}/questions/${questionId}`);
    const object = await response.json();
    const newQuestion = QuestionModel.from_object(object);
    setQuestion(newQuestion);
  }
  
  const set_question_responded = (questionResponded: QuestionModel) => {
    setQuestion(questionResponded);
    const correctAnswer = questionResponded.correct;
    setCorrectAnswers(correctAnswers + (correctAnswer ? 1 : 0));
  }

  const go_next_question = () => {
    
  }

  useEffect(() => {
    loadQuestionsIds();
  }, [])

  useEffect(() => {
    idsOfQuestions.length > 0 && loadQuestion(idsOfQuestions[0]);
  }, [idsOfQuestions])
 
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
function fromObject(object: any): any {
  throw new Error('Function not implemented.')
}


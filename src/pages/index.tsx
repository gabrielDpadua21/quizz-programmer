import Questionary from '@/components/Questionary'
import AnswerModel from '@/model/answer'
import QuestionModel from '@/model/question'
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

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
  const router = useRouter();
  
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

  const id_next_question = () => {
    const nextIndex = idsOfQuestions.indexOf(question.id) + 1
    return idsOfQuestions[nextIndex]
  }

  const go_next_step = () => {
    const nextId = id_next_question();
    nextId ? go_next_question(nextId) : finished()
  }

  const go_next_question = (nextId: number) => {
    loadQuestion(nextId);
  }

  const finished = () => {
    router.push({
      pathname: '/result',
      query: {
        total: idsOfQuestions.length,
        correct: correctAnswers
      }
    })
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
          last_question={id_next_question() === undefined}
          set_question_responded={set_question_responded}
          go_next_question={go_next_step}
        />
      </div>
    </>
  )
}


import { random_number_arrays } from "@/functions/arrays"
import questions from "../questions_list"
import { NextApiRequest, NextApiResponse } from "next"


export default (request: NextApiRequest, response: NextApiResponse) => {
  const eleatory_questions = random_number_arrays(questions.map(question => question.id))
  response.status(200).json(eleatory_questions)
} 

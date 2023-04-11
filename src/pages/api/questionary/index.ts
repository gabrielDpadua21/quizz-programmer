import questions from "../questions_list"
import { NextApiRequest, NextApiResponse } from "next"


export default (request: NextApiRequest, response: NextApiResponse) => {
  response.status(200).json(questions.map(question => question.id))
} 

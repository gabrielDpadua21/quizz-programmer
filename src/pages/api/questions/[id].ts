import { NextApiRequest, NextApiResponse } from "next";
import questions from '../questions_list'


export default (request: NextApiRequest, response: NextApiResponse) => {
    const id = +request.query.id;
    const question = questions.filter(question => question.id == id)
    if(question.length === 1) 
      response.status(200).json(question[0].to_object());
    if(question.length < 1)
      response.status(204).send()
} 

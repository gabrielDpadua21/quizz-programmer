import QuestionModel from "@/model/question";
import AnswerModel from "@/model/answer";

const questions: QuestionModel[] = [
  new QuestionModel(1, 'Qual operador faz calculo de potencia em java?', [
    AnswerModel.wrong('+'),
    AnswerModel.wrong('Math.sqrt'),
    AnswerModel.wrong('/'),
    AnswerModel.correct('Math.pow')
  ]),
  new QuestionModel(2, 'Qual biblioteca e usada para formatar data em java',[
    AnswerModel.wrong('Math'),
    AnswerModel.wrong('Strings'),
    AnswerModel.wrong('Scanner'),
    AnswerModel.correct('DateTime')
  ])
]

export default questions;

import { random_number_arrays } from "@/functions/arrays";
import AnswerModel from "./answer";

export default class QuestionModel {
    #id: number;
    #question: string;
    #answer: AnswerModel[];
    #correct: boolean;

    constructor(
        id: number, 
        question: string, 
        answer: AnswerModel[], 
        correct = false
    ) {
        this.#id = id;
        this.#question = question;
        this.#answer = answer;
        this.#correct = correct;
    }

    get id(): number {
        return this.#id;
    }

    get question(): string {
        return this.#question;
    }

    get answer(): any[] {
        return this.#answer;
    }

    get correct(): boolean {
        return this.#correct;
    }

    get is_not_responded(): boolean {
        return !this.is_responded;
    }

    get is_responded(): boolean {
        for (let answer of this.#answer) {
            if (answer.revealed) return true;
        }
        return false;
    }

    respond_with(index: number) {
      
        const correct = this.#answer[index]?.is_correct || this.#correct;

        const answers = this.#answer.map((answer, i) => {
            const seletedAnswer = index === i;
            const shouldRevel = seletedAnswer || answer.is_correct;
            return shouldRevel ? answer.reveal() : answer
        });
        return new QuestionModel(
            this.#id,
            this.#question,
            answers,
            correct
        )
    }

    random_answers(): QuestionModel {
        const random_answers = random_number_arrays(this.#answer);
        return new QuestionModel(
            this.#id,
            this.#question,
            random_answers,
            this.#correct
        )
    }

    to_object() {
      return {
        id: this.#id,
        question: this.#question,
        answer: this.#answer.map(aws => aws.to_object()),
        correct: this.#correct,
        responded: this.is_responded
      }
    }

    static from_object(object: any) {
      return new QuestionModel(
        object.id,
        object.question,
        object.answer.map((aws: any) => AnswerModel.from_object(aws)),
        object.correct
      )
    }
}

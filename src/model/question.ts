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
        correct: boolean
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

    get is_responded(): boolean {
        for (let answer of this.#answer) {
            if (answer.revealed) return true;
        }
        return false;
    }
}
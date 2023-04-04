export default class AnswerModel {
    #value: string;
    #is_correct: boolean;
    #revealed: boolean;

    constructor(
        value: string,
        is_correct: boolean,
        revealed: boolean
    ) {
        this.#value = value;
        this.#is_correct = is_correct;
        this.#revealed = revealed;
    }

    get value(): string {
        return this.#value;
    }

    get is_correct(): boolean {
        return this.#is_correct;
    }

    get revealed(): boolean {
        return this.#revealed;
    }
}
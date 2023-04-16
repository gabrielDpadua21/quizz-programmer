export default class AnswerModel {
    #value: string;
    #is_correct: boolean;
    #revealed: boolean;

    constructor(
        value: string,
        is_correct: boolean,
        revealed = false
    ) {
        this.#value = value;
        this.#is_correct = is_correct;
        this.#revealed = revealed;
    }

    static correct(value: string) {
      return new AnswerModel(value, true)
    }

    static wrong(value: string) {
      return new AnswerModel(value, false)  
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

    reveal() {
      return new AnswerModel(this.#value, this.#is_correct, true)
    }

    to_object() {
      return {
        value: this.#value,
        is_correct: this.#is_correct,
        revealed: this.#revealed
      }  
    }

    from_object(obj: any) {
      this.#value = obj.value;
      this.#is_correct = obj.is_correct;
      this.#revealed = obj.revealed
    }

    static from_object(object: any) {
      return new AnswerModel(object.value, object.is_correct, object.revealed)
    }

}

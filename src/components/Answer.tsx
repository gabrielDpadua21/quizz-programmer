import styles from "../styles/Answer.module.css";
import AnswerModel from "@/model/answer";
import React from "react";
import Front from "./Answers/Front";
import Back from "./Answers/Back";

interface AnswareProps {
    value: AnswerModel,
    index: number,
    letter: string,
    background: string
    on_response: (index: number) => void
}

const Answer: React.FC<AnswareProps> = ((props: AnswareProps) => {
    const answer = props.value;
    const revealAnswer = answer.revealed ? styles.revealed : '';
    return (
        <>
          <div className={styles.answer} onClick={() => props.on_response(props.index)}>
            <div className={`${revealAnswer} ${styles.content}`}>
                <Front 
                  styles={styles} 
                  value={answer.value} 
                  background={props.background}
                  letter={props.letter}
                />
                <Back 
                  styles={styles}
                  value={answer.value}
                  is_correct={answer.is_correct}
                />
              </div>
          </div>
        </>
    )
})

export default Answer;
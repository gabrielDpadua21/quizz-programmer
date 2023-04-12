import styles from "../styles/Answer.module.css";
import AnswerModel from "@/model/answer";
import React from "react";

interface AnswareProps {
    value: AnswerModel,
    index: number,
    letter: string,
    color: string
}

const Answer: React.FC<AnswareProps> = ((props: AnswareProps) => {
    const answer = props.value;

    return (
        <>
          <div className={styles.answer}>
            <div className={styles.front}>
              <div className={styles.letter}>
                {props.letter}
              </div>
              <div className={styles.value}>
                {answer.value}
              </div>
            </div>
            <div className={styles.back}>

            </div>
          </div>
        </>
    )
})

export default Answer;
import styles from "../styles/Answer.module.css";
import AnswerModel from "@/model/answer";
import React from "react";

interface AnswareProps {
    value: AnswerModel,
    index: number,
    letter: string,
    background: string
}

const Answer: React.FC<AnswareProps> = ((props: AnswareProps) => {
    const answer = props.value;

    return (
        <>
          <div className={styles.answer}>
            <div className={styles.content}>
              <div className={styles.front}>
                <div className={styles.letter} style={{ backgroundColor: props.background }}>
                  {props.letter}
                </div>
                <div className={styles.value}>
                  {answer.value}
                </div>
              </div>
              <div className={styles.back}>

              </div>
              </div>
          </div>
        </>
    )
})

export default Answer;
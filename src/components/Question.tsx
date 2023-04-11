import styles from '../styles/Question.module.css';
import QuestionModel from "@/model/question";


interface InterfaceQuestionProps {
    value: QuestionModel
}

const Question = (props: InterfaceQuestionProps) => {
    const question = props.value;

    return (
        <>
            <div className={styles.question}>
                <h1>
                    Question
                </h1>
            </div>
        </>
    )
}

export default Question;
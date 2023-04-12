import styles from '../styles/Question.module.css';
import QuestionModel from "@/model/question";
import Statement from './Statement';


interface InterfaceQuestionProps {
    value: QuestionModel
}

const Question = (props: InterfaceQuestionProps) => {
    const question = props.value;

    return (
        <>
            <div className={styles.question}>
                <Statement text={question.question} />
            </div>
        </>
    )
}

export default Question;
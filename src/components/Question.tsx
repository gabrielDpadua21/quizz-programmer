import styles from '../styles/Question.module.css';
import QuestionModel from "@/model/question";
import Statement from './Statement';
import Answer from './Answer';


interface InterfaceQuestionProps {
    value: QuestionModel
}

const Question = (props: InterfaceQuestionProps) => {
    const question = props.value;

    const renderAnswers = () => {
        return question.answer.map((answer, index) => {
            return (
                <Answer 
                    key={index} 
                    value={answer} 
                    index={index} 
                    letter="A" 
                    background="#F2C866"
                />
            )
        })
    }

    return (
        <>
            <div className={styles.question}>
                <Statement text={question.question} />
                { renderAnswers() }
            </div>
        </>
    )
}

export default Question;
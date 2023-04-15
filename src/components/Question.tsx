import styles from '../styles/Question.module.css';
import QuestionModel from "@/model/question";
import Statement from './Statement';
import Answer from './Answer';
import Timer from './Times';

const letters = [
    {
        value: 'A',
        color: '#F2C866'
    },
    {
        value: 'B',
        color: '#f266ba'
    },
    {
        value: 'C',
        color: '#85d4f2'
    },
    {
        value: 'D',
        color: '#bce596'
    },
]

interface InterfaceQuestionProps {
    value: QuestionModel;
    on_response: (index: number) => void;
    time_for_response?: number;
    time_lost: () => void;
}

const Question = (props: InterfaceQuestionProps) => {
    const question = props.value;

    const renderAnswers = () => {
        return question.answer.map((answer, index) => {
            const { value, color } = letters[index];
            return (
                <Answer 
                    key={index} 
                    value={answer} 
                    index={index} 
                    letter={value}
                    background={color}
                    on_response={props.on_response}
                />
            )
        })
    }

    return (
        <>
            <div className={styles.question}>
                <Statement text={question.question} />
                <Timer 
                    duration={props.time_for_response ?? 10} 
                    time_lost={props.time_lost}
                />
                { renderAnswers() }
            </div>
        </>
    )
}

export default Question;
import styles from "../styles/Questionary.module.css";
import QuestionModel from "@/model/question";
import Question from "./Question";
import Button from "./Button";

interface QuestionaryProps {
    question: QuestionModel;
    last_question: boolean;
    set_question_responded: (question: QuestionModel) => void;
    go_next_question: () => void;
}

const Questionary: React.FC<QuestionaryProps> = (props: QuestionaryProps) => {
    
    const on_response = (index: number) => {
        if(props.question.is_not_responded) {
            props.set_question_responded(props.question.respond_with(index));
        }
    }
    
    return (
        <div className={styles.questionary}>
            { props.question ? 
                <Question 
                    value={props.question}
                    time_for_response={45}
                    on_response={on_response}
                    time_lost={props.go_next_question}
                /> : null
            }
            <Button 
                onClick={props.go_next_question}
                text={props.last_question ? "Finish" : "Next"}
            />
        </div>
    )
}

export default Questionary;
import Statistics from "@/components/Statistics";
import styles from "../styles/Result.module.css";
import { useRouter } from "next/router";
import Button from "@/components/Button";

const Result: React.FC = () => {
    const router = useRouter();

    const total = +router.query.total | 0;
    const correct = +router.query.correct | 0;
    const percent = Math.round((correct / total) * 100);
    
    return (
        <div className={styles.result}>
            <h1>Final Result</h1>
            <div className={styles.container}>
                <Statistics 
                    text="Questions"
                    value={total}
                />
                <Statistics 
                    text="Correct answers"
                    value={correct}
                    color_background="#9CD2A4"
                    color="#fff"
                />
                <Statistics 
                    text="Percent correct"
                    value={`${percent}%`}
                    color_background="#DE6A33"
                    color="#fff"
                />
            </div>
            <Button text="Start new game" href="/"/>
        </div>
    );
}

export default Result;
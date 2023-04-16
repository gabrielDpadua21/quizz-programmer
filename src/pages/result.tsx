import styles from "../styles/Result.module.css";
import { useRouter } from "next/router";

const Result: React.FC = () => {
    const router = useRouter();

    const total = +router.query.total | 0;
    const correct = +router.query.correct | 0;
    const percent = Math.round((correct / total) * 100);
    
    return (
        <div className={styles.result}>
            <h1>Final Result</h1>
            <span>
                {total}
            </span>
            <span>
                {correct}
            </span>
            <span>
                {percent}%
            </span>
        </div>
    );
}

export default Result;
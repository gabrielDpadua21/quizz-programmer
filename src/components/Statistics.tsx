import styles from "../styles/Statistics.module.css";

interface StatisticsProps {
    value: any;
    text: string;
    color_background?: string;
    color?: string
}

const Statistics: React.FC<StatisticsProps> = (props: StatisticsProps) => {
    return (
        <>
            <div className={styles.statistics}>
                <div className={styles.value} style={{
                    backgroundColor: props.color_background ?? "#FDD60F",
                    color: props.color ?? "#333"	
                }}>
                    {props.value}
                </div>
                <div className={styles.text}>
                    {props.text}
                </div>
            </div>
        </>
    )
}

export default Statistics;
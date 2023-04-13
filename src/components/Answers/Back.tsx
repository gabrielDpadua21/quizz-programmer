
interface BackProps {
    styles: any
    value: string
    is_correct: boolean
}

const Back: React.FC<BackProps> = ((props: BackProps) => {
    const {styles, is_correct, value} = props;

    return (
        <div className={styles.back}>
            {is_correct ? (
                <div className={styles.correct}>
                <div>The Correct answer is...</div>
                <div className={styles.value}>
                    {value}
                </div>
                </div>
            ) : (
                <div className={styles.wrong}>
                <div>The answer selected is wrong...</div>
                <div className={styles.value}>
                    {value}
                </div>
                </div>
            )}
        </div>
    )
})

export default Back;
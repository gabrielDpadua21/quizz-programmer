
interface FrontProps {
    value: string,
    letter: string
    background: string,
    styles: any
}

const Front: React.FC<FrontProps> = ((props: FrontProps) => {
    const { styles, letter, value, background } = props;

    return (
        <div className={styles.front}>
            <div className={styles.letter} style={{ backgroundColor: background }}>
                {letter}
            </div>
            <div className={styles.value}>
                {value}
            </div>
        </div>
    )
})

export default Front;
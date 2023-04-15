import styles from '../styles/Button.module.css';
import Link from 'next/link';

interface ButtonProps {
    href?: string
    text: string
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void	
}


const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
    
    const renderButton = () => {
        return (
            <button onClick={props.onClick}>
                {props.text}
            </button>
        )
    }
    
    return (
        <div className={styles.button}>
            {props.href ?
                <Link href={props.href}>
                    {renderButton()}
                </Link> : renderButton()
            }
        </div>
    )
}

export default Button;
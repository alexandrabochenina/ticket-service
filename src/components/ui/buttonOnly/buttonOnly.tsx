import styles from './buttonOnly.module.css'

type TButtonOnlyProps = {
    onClick: (key: any) => void
}

const ButtonOnly: React.FC<TButtonOnlyProps> = ({onClick}: TButtonOnlyProps) => {
    return (
        <button className={styles.button} onClick={onClick}>ТОЛЬКО</button>
    )
}

export default ButtonOnly;
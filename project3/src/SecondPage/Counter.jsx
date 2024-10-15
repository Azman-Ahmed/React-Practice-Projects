import styles from './SecondPage.module.css';

const SecondPage = ({score}) => {
    return (
        <div className={styles.counter}>
            <h1>{score}</h1>
            <p>Counter</p>
        </div>
    );
};

export default SecondPage;

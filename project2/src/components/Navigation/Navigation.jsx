import styles from "./Navigation.module.css"

const Navigation = () => {
  console.log(styles);
  return (
    <nav className={`container ${styles.Navigation}`}>
        <div>
          <img className={`${styles.Navigation}`} src="\images\logo.png" alt="logo"/>
        </div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
  )
}

export default Navigation

import styles from "./login.module.css"
import LoginForm from "@/components/loginForm/loginForm"
import { handleGithubLogin } from "@/lib/actions"

const LoginPage =() => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
            <form action={handleGithubLogin}>
                <button className={styles.github}>Login With Github</button>
            </form>
            <LoginForm/>
            </div> 
        </div>
    )
}  

export default LoginPage    
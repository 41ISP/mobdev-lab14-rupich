import { Link } from "react-router-dom"
import Input from "../../components/Input"
import Button from "../../components/Button"
import { useState } from "react"

const SingUp = () => {
const [error, setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        setError("")
        
        if (e.target.password.value != e.target.password2.value) {
            setError("Пароли не совподают")
            return
        }

        const user ={
            username: e.target.username.value,
            email: e.target.email.value,
            password: e.target,password,value
        }
    }
    return(
        <div className="auth-page">
            <div className="auth-container">
                <h1 className="auth-title">Регистрация</h1>
                {error.length > 0 && <div className="auth-error">{error}</div>}
                <form onSubmit={handleSubmit} className="auth-form">
                    <Input placeholder="Имя пользователя" required name="username"/>
                    <Input placeholder="email" required name="email"/>
                    <Input placeholder="Пароль" required name="password" type="password"/>
                    <Input placeholder="Повторите пароль" required name="password2" type="password"/>
                    <Button>Зарегистрироваться</Button>
                </form>
                <footer className="auth-footer">
                <Link to ="/signin">Войти</Link>
                </footer>
            </div>
        </div>
    )
}

export default SingUp
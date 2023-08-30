import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContexts";
import { useForm } from "../../hooks/useForm";

export const Login = ({
    auth,
}) => {
    const { onLoginSubmit } = useContext(AuthContext);
    // const { onLoginSubmit } = auth;
    const { values, changeHandler, onSubmit } = useForm({
        email: "",
        password: "",
    }, onLoginSubmit);

    return (
        <section id="login-page" className="auth">
            <form id="login" method="POST" onSubmit={onSubmit}>
                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Sokka@gmail.com"
                        value={values.email}
                        onChange={changeHandler}
                    />

                    <label htmlFor="login-pass">Password:</label>
                    <input
                        type="password"
                        id="login-password"
                        name="password"
                        onChange={changeHandler}
                        value={values.password}
                    />
                    <input type="submit" className="btn submit" value="Login" />
                    <p className="field">
                        <span>If you don't have profile  <Link to='/register'>click</Link></span>
                    </p>
                </div>
            </form>
        </section>
    )
}
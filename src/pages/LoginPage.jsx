import LoginForm from "../components/LoginForm/LoginForm.jsx";
import s from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <div className={s.container}>
      <h2 className={s.title}>Log In</h2>
      <LoginForm />
    </div>
  );
};

export default LoginPage;

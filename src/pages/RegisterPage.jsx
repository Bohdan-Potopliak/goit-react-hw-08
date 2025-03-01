import RegistrationForm from "../components/RegistrationForm/RegistrationForm.jsx";
import s from "./RegisterPage.module.css";

const RegisterPage = () => {
  return (
    <div className={s.container}>
      <h2 className={s.title}>Sign Up</h2>
      <RegistrationForm />
    </div>
  );
};

export default RegisterPage;

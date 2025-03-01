import { Link } from "react-router-dom";
import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={s.container}>
      <h1 className={s.title}>Welcome to Phonebook App</h1>
      <p className={s.description}>
        Manage your contacts easily and securely. Sign up or log in to get
        started.
      </p>
      <div className={s.links}>
        <Link className={s.button} to="/register">
          Sign Up
        </Link>
        <Link className={s.button} to="/login">
          Log In
        </Link>
      </div>
    </div>
  );
};

export default HomePage;

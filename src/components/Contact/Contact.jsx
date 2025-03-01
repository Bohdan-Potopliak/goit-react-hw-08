import s from "./Contact.module.css";
import { IoMdContact } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ data: { id, name, number } }) => {
  const dispatch = useDispatch();
  return (
    <div className={s.container}>
      <p className={s.contactName}>
        <IoMdContact /> {name}
      </p>
      <p className={s.contactNumber}>
        <FaPhone /> {number}
      </p>
      <button className={s.btn} onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </div>
  );
};

export default Contact;

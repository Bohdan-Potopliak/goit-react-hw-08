import { useSelector } from "react-redux";
import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/contactsSlice";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={s.list}>
      {filteredContacts.map((cont) => (
        <li className={s.item} key={cont.id}>
          <Contact data={cont} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

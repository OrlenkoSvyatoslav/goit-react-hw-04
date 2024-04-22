import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import css from "../Contact/Contact.module.css";

const Contact = ({ contact, onDelete }) => {
  return (
    <>
      <div>
        <p>
          <FaUser className={css.iconContact} />
          {contact.name}
        </p>
        <p>
          <FaPhoneAlt className={css.iconContact} />
          {contact.number}
        </p>
      </div>
      <button className={css.deleteButton} onClick={() => onDelete(contact.id)}>
        Delete
      </button>
    </>
  );
};

export default Contact;

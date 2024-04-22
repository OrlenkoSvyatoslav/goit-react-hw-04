import Contact from "../Contact/Contact";
import css from "../ContactList/ContsctList.module.css";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <>
      <ul className={css.contactList}>
        {contacts.map((contact) => (
          <li className={css.contactListItem} key={contact.id}>
            <Contact contact={contact} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;

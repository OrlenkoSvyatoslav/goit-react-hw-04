import { useState, useEffect } from "react";
import initialContacts from "../../contacts.json";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";
import { nanoid } from "nanoid";

function App() {
  const [contacts, setContacts] = useState(() => {
    const saveContacts = window.localStorage.getItem("contacts-key");
    if (saveContacts !== null) {
      return JSON.parse(saveContacts);
    }
    return initialContacts;
  });

  const [search, setSearch] = useState("");

  const searchContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  const deleteContact = (contactId) => {
    setContacts((deleteContact) => {
      return deleteContact.filter((contact) => contact.id !== contactId);
    });
  };

  const addContact = (newContact) => {
    console.log(newContact);
    setContacts((prevContacts) => {
      return [...prevContacts, { ...newContact, id: nanoid() }];
    });
  };

  const initialValues = {
    id: nanoid(),
    name: "",
    number: "",
  };

  useEffect(() => {
    window.localStorage.setItem("contacts-key", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm value={initialValues} onAdd={addContact} />
      <SearchBox value={search} onSearch={setSearch} />
      <ContactList contacts={searchContacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;

import { useState, useEffect } from 'react';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';

export function App() {
  const [filterName, setFilterName] = useState('');
  const [contacts, setContacts] = useState(() => {
    const localContacts = localStorage.getItem("contacts")
    if (localContacts) {
      return JSON.parse(localContacts)
    } else {
      return [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
    }
  }
  );
  
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts))
  }, [contacts])

  const addContact = (newContact) => {
    const isExist = () => {
      return contacts.find(contact => {
        return (contact.name === newContact.name)
      })
    }
    if (isExist()) {
      return alert(`${newContact.name} is already in contacts`)
    }
    return setContacts([...contacts, newContact])
  }

  const filterContacts = (event) => {
    setFilterName(event.target.value)
  }

  const deleteContact = (event) => {
    const contactToDel = event.currentTarget.name;
    const newContactsList = contacts.filter(contact => {
      if (contact.name === contactToDel) {
        return false
      } else {
        return contact
      }
    })
    setContacts(newContactsList)
  }

  return (
    <div
      style={{
        width: '800px',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        color: '#010101',
        margin: '40px auto',
      }}
    >
      <h1 className="title">Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h2 className="title">Contacts</h2>
      <Filter findContacts={filterContacts} />
      <ContactList list={contacts} deleteContact={deleteContact} filterName={filterName} />
    </div>
  )
}
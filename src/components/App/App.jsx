import { useState } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { nanoid } from 'nanoid';
import Title from '../Title';
import ContactForm from '../ContactForm';
import ContactsTitle from '../ContactsTitle';
import Filter from '../Filter/Filter';
import ContactsList from '../ContactList';
import { Container } from './App.styled';


const defaultContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '+49-362-459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '+49-362-443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '+49-362-645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '+49-362-227-91-26' },
];

export default function App() {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useLocalStorage('contacts', defaultContacts);

  const formSubmitData = ({ name, number }) => {
    const isFindName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isFindName) {
      alert(`${name} is already in contacts !`);
      return;
    } 
    else {
      const newContacts = {
        id: nanoid(),
        name,
        number,
      };
      setContacts(contacts => [newContacts, ...contacts]);
    }
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  return (
    <Container>
      <Title title="Phonebook" />
      <ContactForm onSubmit={formSubmitData} />
      <ContactsTitle title="Contacts" />
      <Filter onChange={changeFilter} value={filter} />
      <ContactsList contacts={getVisibleContacts()} onDelete={deleteContact} />
    </Container>
  );
}


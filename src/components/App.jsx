import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import style from './App.module.css';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  handleAddContact = data => {
    const nameInLowerCase = data.name.toLowerCase();
    const exist = this.state.contacts.some(
      ({ name }) => name.toLowerCase().trim() === nameInLowerCase.trim()
    );
    if (exist) {
      throw new Error(`${data.name} is already in contacts`);
    }
    this.setState(prev => ({
      contacts: [{ ...data, id: nanoid() }, ...prev.contacts],
    }));
  };

  handleFilterChange = evt => {
    this.setState({ filter: evt.target.value });
  };

  filterContacts = () => {
    const filterInLowerCase = this.state.filter.toLowerCase();
    return this.state.contacts.filter(({ name }) =>
      name.toLowerCase().includes(filterInLowerCase)
    );
  };

  handlerRemoveContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== contactId),
    }));
  };

  render() {
    return (
      <div className={style.container}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleAddContact} />
        <h2>Contacts</h2>
        <span>Find contact by name</span>
        <Filter onFilterChange={this.handleFilterChange} />
        <ContactList
          onRemoveContact={this.handlerRemoveContact}
          contacts={this.filterContacts()}
        />
      </div>
    );
  }
}
export default App;

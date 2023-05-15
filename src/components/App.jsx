import React, { Component } from 'react';
import { Section } from './Section/Section';
import { Form } from './Foarm/Form';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import toast, { Toaster } from 'react-hot-toast';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

  handleAddContact = contact => {
    if (this.state.contacts.some(el => el.name === contact.name)) {
      toast.error(`${contact.name} is already in contacts.`);
      return true;
    }
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, contact],
      };
    });
    return false;
  };

  handleDeleteContact = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(el => el.id !== id),
      };
    });
  };

  handleChandgeFilter = ev => {
    this.setState({ filter: ev.target.value });
  };

  handleFilterContacts = () => {
    return this.state.contacts.filter(el =>
      el.name.toLowerCase().includes(this.state.filter.toLowerCase().trim())
    );
  };

  render() {
    return (
      <>
        <Section title="Phonebook">
          <Form addContact={this.handleAddContact}></Form>
        </Section>
        <Section title="Contacts">
          <Filter
            value={this.state.filter}
            handleChange={this.handleChandgeFilter}
          ></Filter>
          <ContactsList
            contacts={this.handleFilterContacts()}
            deleteContact={this.handleDeleteContact}
          />
        </Section>
        <Toaster />
      </>
    );
  }
}

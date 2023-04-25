import { nanoid } from 'nanoid';
import { Component } from 'react';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import './App.css';

class App extends Component {
    state = {
      contacts: [
        {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
        {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
        {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
        {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
      ],
      filteredContacts: [
        {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
        {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
        {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
        {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
      ],
    }
    
  handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const name = form.elements.name.value;
    const namee = name.toLowerCase();

    for (let person of this.state.contacts) {
      if (person.name.toLowerCase() === namee) {
        alert(name + ' is already in contacts')
        return
      } else {
        continue
      }
    }

    const number = form.elements.number.value;
    const id = nanoid();
    const personObject = { name: name, number: number, id: id }
    this.setState( {contacts: this.state.contacts.concat(personObject)})
    this.setState( {filteredContacts: this.state.filteredContacts.concat(personObject)} )
    //console.log(this.state.contacts)
    form.reset();
  }

  handleFilter = (evt) => {
    const word = evt.target.value.toLowerCase();
    const filtered = this.state.contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(word));
    this.setState({ filteredContacts: filtered }); 
  }

  handleDelete = (id) => {
    const newContacts = [...this.state.contacts];
    const index = newContacts.findIndex((contact) => contact.id === id);
    newContacts.splice(index, 1)
    this.setState({contacts: newContacts})
    this.setState({filteredContacts: newContacts})
  }

  render() {
    const { contacts } = this.state
    const { filteredContacts } = this.state;

    return (
      <div className='.container'>
        <h1>Phonebook</h1>
        <ContactForm handleSubmit={this.handleSubmit}/>
        <h2>Contacts</h2>
        <Filter handleFilter={this.handleFilter}/>
        <ContactList arr={ filteredContacts } handleDelete={this.handleDelete} />
      </div>
    );
  }

};

export { App }
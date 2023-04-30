import { nanoid } from 'nanoid';
import { Component } from 'react';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import css from './App.module.css'

class App extends Component {
    state = {
      contacts: [
        {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
        {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
        {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
        {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
      ],
      filter: ''
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
    //console.log(personObject)
    form.reset();

  }

  setFilter = ( {target} ) => { this.setState({filter: target.value})  }

  handleDelete = (id) => {
    const newContacts = [...this.state.contacts];
    const index = newContacts.findIndex((contact) => contact.id === id);
    newContacts.splice(index, 1)
    this.setState({contacts: newContacts})
  }

 

  render() {
    const { filter } = this.state;
    const { contacts } = this.state;

    const byFilterField = p => p.name.toLowerCase().includes(filter.toLowerCase())

    const personsToShow = filter ? contacts.filter(byFilterField) : contacts;

    return (
      <div className={css.container}>
        <h1>Phonebook</h1>
        <ContactForm handleSubmit={this.handleSubmit}/>
        <h2>Contacts</h2>
        <Filter setFilter={this.setFilter} filter={filter}/>
        <ContactList arr={personsToShow} handleDelete={this.handleDelete} />
      </div>
    );
  }

};

export { App }
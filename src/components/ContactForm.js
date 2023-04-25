const ContactForm = ( {handleSubmit, handleChange} ) => {
    return (
      <form className='.form' onSubmit={handleSubmit}>
        <p className='.p'>Name</p>
        <input 
        className='.input' 
        type='text' 
        name='name'
        onChange={handleChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        />
        <p className='.p'>Number</p>
        <input 
        className='.input' 
        type='tel' 
        name='number'
        onChange={handleChange}
        pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        />
        <button className='.btn' type='submit'>Add contact</button>
      </form>
    )
  }

  export { ContactForm }
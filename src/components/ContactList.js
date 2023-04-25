const ContactList = ( { arr, handleDelete} ) => {
  return (
    <ul>
      {arr.map( person => (
        <li className='.li' key={person.id}>
          {person.name}: {person.number}
          <button className='.btndel' onClick={() => handleDelete(person.id)}>Delete</button>
        </li>

      ))}
    </ul> 
  )
}


export { ContactList }
const Filter = ( { handleFilter } ) => {
    return(
      <>
        <p className='.p'>Find contacts by name</p>
        <input 
        onChange={handleFilter}
        type='text'
        name='filter'
        />
      </>
    )
  }

export { Filter }
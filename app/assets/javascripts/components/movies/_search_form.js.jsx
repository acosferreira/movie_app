const SearchForm = (props) => {

    let formFields = {}
    return(
      <div>
        <input ref={input => formFields.title = input} placeholder='search'
              onChange={ () => props.handleSearch(formFields.title.value)}/>
      </div>
    )
}

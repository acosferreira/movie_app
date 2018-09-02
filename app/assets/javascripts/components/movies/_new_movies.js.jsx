const NewMovie = (props) => {
var f =  props.categories || []
var categories = f.map((category) => {
  return(
    <option value={category.id}>{category.name}</option>
  )
})
    let formFields = {}
    return(

      <div >
        <input ref={input => formFields.title = input} placeholder='Enter a title'/>
        <input ref={input => formFields.description = input} placeholder='Enter a description' />
        <select ref={input => formFields.category_id = input}>
          {categories}
        </select>
        <input ref={input => formFields.user_id = input} placeholder='Enter a user' />
        <button onClick={ () => props.handleFormSubmit(formFields.title.value,
                                                       formFields.description.value,
                                                       formFields.category_id.value,
                                                       formFields.user_id.value)}>Submit</button>
      </div>

    )
}

const ListCategories = (props) => {
var f =  props.categories || []
var categories = f.map((category) => {
  return(
  <li><a onClick={ () => props.handleCategorySearch(category.id)}>
      {category.name}({category.total_movies})</a>
  </li>
  )
})
    let formFields = {}
    return(
      <React.Fragment>
      {categories}
      </React.Fragment>


    )
}

class Body extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      categories: [],
      current_user: [],
      page: 0,
      pages: 0
    };

    this.getAllCategories = this.getAllCategories.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleCategorySearch = this.handleCategorySearch.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.addNewMovie = this.addNewMovie.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.deleteMovie = this.deleteMovie.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
    this.updateMovie = this.updateMovie.bind(this)

  }


  getAllCategories(){
    fetch('/api/v1/categories.json')
    .then((response) => {return response.json()})
    .then((data) => {this.setState( { categories: data} ) });
  }

  handleSearch(events) {
    fetch(`/api/v1/movies/search?query=${events}`
      ).then((response) => {return response.json()})
      .then((data) => {this.setState({ movies: data }) });
  }

  handleCategorySearch(events) {
    fetch(`/api/v1/categories/search?query=${events}`
      ).then((response) => {return response.json()})
      .then((data) => {this.setState({ movies: data }) });
  }

  handleFormSubmit(title, description, category, user){
    let body = JSON.stringify({movie: {title: title,
                                       description: description,
                                       category_id: category,
                                       user_id: user} })
    fetch('/api/v1/movies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body,
    }).then((response) => {return response.json()})
    .then((movie)=>{
      this.addNewMovie(movie)
    })

  }

  addNewMovie(movie){
    this.setState({
      movies: this.state.movies.concat(movie)
    })
  }

   handleDelete(id){
    fetch(`/api/v1/movies/${id}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
        this.deleteMovie(id)
      })
  }

  deleteMovie(id){
    newMovies = this.state.movies.filter((movie) => movie.id !== id)
    this.setState({
      movies: newMovies
    })
  }

  handleUpdate(movie){
    fetch(`/api/v1/movies/${movie.id}`,
    {
      method: 'PUT',
      body: JSON.stringify({movie: movie}),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
        this.updateMovie(movie)
      })
  }
  updateMovie(movie){
    let newMovies = this.state.movies.filter((f) => f.id !== movie.id)
    newMovies.push(movie)
    this.setState({
      movies: newMovies
    })
  }

  handleChangePage(page) {
  fetch(`/api/v1/movies?page=${page}`
    ).then((response) => {return response.json()})
    .then((data) => {this.setState({ movies: data });
  })
  }


  componentDidMount(){
    this.getAllCategories()
    fetch('/api/v1/movies.json')
      .then((response) => {return response.json()})
      .then((data) => {this.setState( {movies: data} ) });
  }

  render(){
    return(

    <div class="container-fluid">
      <div class="row content">
        <div class="input-group">
          <SearchForm handleSearch={this.handleSearch}/>
        </div>
        <div class="col-sm-3 sidenav">
          <h4>CategoryList</h4>
          <ul class="nav nav-pills nav-stacked">
            <ListCategories categories={this.state.categories} handleCategorySearch={this.handleCategorySearch}/>
          </ul>
        </div>
        <div class="col-sm-9">
          <NewMovie categories={this.state.categories} handleFormSubmit={this.handleFormSubmit}/>
          <AllMovies movies={this.state.movies} handleDelete={this.handleDelete} handleUpdate={this.handleUpdate}/>
        </div>

      </div>
    </div>




    )
  }
}

const AllMovies = (props) => {
  var f =  props.movies || []
  var movies = f.map((movie) => {
    return(
       <Movie movie={movie} handleDelete={props.handleDelete} handleUpdate={props.handleUpdate}/>
    )
  })
  return(
  <React.Fragment>
  <h2>Movie List</h2>
    <table class="table table-striped">
      <thead>
        <tr>
          <th className="col-md-2">Title</th>
          <th className="col-md-3">Description</th>
          <th className="col-md-3">Rating</th>
          <th className="col-md-2"> </th>
          <th className="col-md-2"> </th>
        </tr>
      </thead>
      <tbody>
        <Pagination movies={movies} handleDelete={props.handleDelete} handleUpdate={props.handleUpdate}/>
      </tbody>
    </table>
    </React.Fragment>
    )
}

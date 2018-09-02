class Pagination extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    currentPage: 1,
    todosPerPage: 10
  };
  this.handleClick = this.handleClick.bind(this);
}

handleClick(event) {
  this.setState({
    currentPage: Number(event.target.id)
  });
}

render() {
  const { currentPage, todosPerPage } = this.state;
  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const todos = this.props.movies;
  const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);
  const renderTodos = currentTodos.map((todo, index) => {
    return <li key={index}>{todo}</li>;
  });

    var movies = currentTodos.map((movie) => {
    return(
       <Movie movie={movie.props.movie} handleDelete={this.props.handleDelete} handleUpdate={this.props.handleUpdate}/>
    )
  })

  // Logic for displaying page numbers

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map(number => {
    return (
      <li
        key={number}
        id={number}
        onClick={this.handleClick}
      >
      <a
      key={number}
      id={number}
      onClick={this.handleClick}
      >{number}</a>
      </li>
    );
  });

  return (
    <React.Fragment>
       { movies }
      <ul class="pagination">
        {renderPageNumbers}
      </ul>
    </React.Fragment>
  );
}
}

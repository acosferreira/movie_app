class Movie extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      editable: false
    }
    this.handleEdit = this.handleEdit.bind(this)
  }

  handleEdit(){
   if(this.state.editable){
      let title = this.title.value
      let description = this.description.value
      let id = this.props.movie.id
      let rating = this.props.movie.rating_average
      let movie = {id: id, title: title, description: description}
      this.props.handleUpdate(movie)
      this.props.handleRatingCreate()
    }
    this.setState({
      editable: !this.state.editable
    })
  }

  render(){
  
    let title = this.state.editable ? <input type='text' ref={input => this.title = input} defaultValue={this.props.movie.title}/>:<p>{this.props.movie.title}</p>
    let description = this.state.editable ? <input type='text' ref={input => this.description = input} defaultValue={this.props.movie.description}/>:<p>{this.props.movie.description}</p>
    let rating = this.state.editable ? <input type='text' ref={input => this.rating_average = input} defaultValue={this.props.movie.rating_average}/>:<p>{this.props.movie.rating_average
    }</p>
    return(
          <tr>
            <td >{title}</td>
            <td >{description}</td>
            <td ><StarRating rating={this.props.rating}
                             movie = {this.props.movie}
                             handleUpdate={this.props.handleUpdate}
                             handleRatingCreate={this.handleRatingCreate}/></td>
            <td >

            <button type="button" class="btn btn-default btn-sm" onClick={() => this.handleEdit()}>
                {this.state.editable? <span class="glyphicon glyphicon-ok"></span> :
                                      <span class="glyphicon glyphicon-pencil"></span>}

            </button>
            </td>
            <td ><button onClick={() => this.props.handleDelete(this.props.movie.id)}>
                  <span class="glyphicon glyphicon-remove"></span>
                </button>
            </td>
          </tr>

    )
  }
}

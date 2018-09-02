const Star = ({ selected=false, onClick=f=>f }) =>
  <div className={(selected) ? "star selected" : "star"}
      onClick={onClick}>
  </div>

 class StarRating extends React.Component{

   constructor(props){
     super(props);
     this.state = {
       starsSelected: this.props.movie.rating_average
     }
     this.handleRating = this.handleRating.bind(this)
     this.handleRatingCreate = this.handleRatingCreate.bind(this)
   }

   handleRating(movie, rating)
   {
    let rating_ins = {movie_id: movie.id, value: rating, user_id: 1 }
    debugger
    this.handleRatingCreate(rating_ins)
   }

   handleRatingCreate(rating_ins){
   debugger
   let body = JSON.stringify({rating: {value: rating_ins.value,
                                      movie_id: rating_ins.movie_id,
                                      user_id: rating_ins.user_id} })
   fetch('/api/v1/ratings', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json'
     },
     body: body,
     }).then((response) => {return response.json()})
     .then((rating)=>{
       this.addNewRating(rating)
     })
   }

   addNewRating(rating){
   debugger
      this.setState({
       ratings: this.props.movie.rating_average
     })
   }

   change(starsSelected) {
     this.handleRating(this.props.movie, starsSelected)
     this.setState({starsSelected})
   }

   render() {

     const {totalStars} = this.props;
     const {starsSelected} = this.state;
     return (
       <div className="star-rating">
         {[1,2,3,4,5].map((n, i) =>

              <Star
                    key={i}
                    selected={i < starsSelected}
                    onClick={() => this.change(i+1)}
             />
         )}
       </div>
     )
   }
 }

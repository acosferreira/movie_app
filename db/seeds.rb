user = User.create(email: 'admin@riskmethod.com', password:'123456')
categories =['Drama', 'Suspense', 'Action']
movies = ['Movie Drama', 'Movie Suspense', 'Movie Action' ]
categories.each_with_index do |category, index|
  byebug
  category = Category.create(name: category, user_id: user.id)
  movie = Movie.create(title:movies[index],
                       description: "The #{movies[index]} is an anwsome #{category.name}.",
                       category_id: category.id,
                       user_id: user.id)
  Rating.create(value: index, movie_id: movie.id, user_id: user.id)
end

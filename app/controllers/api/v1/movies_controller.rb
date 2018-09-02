class Api::V1::MoviesController < ApplicationController

  before_action  :authenticate_user!,  :except => [:index, :search]
  skip_before_action :verify_authenticity_token

  def index
    render json: Movie.all, methods: [:rating_average]
  end

  def create
    movie = Movie.create!(movie_params)
    render json: movie
  end

  def destroy
    Movie.destroy(params[:id])
  end

  def update
    movie = Movie.find(params[:id])
    movie.update_attributes(movie_params)
    render json: movie
  end

  def search
    query = params[:query]
      movies = Movie.where('title LIKE ? ',
                           "%#{query}%")
      render json: movies
  end

  private

  def movie_params
    params.require(:movie).permit(:id, :title, :description, :user_id, :category_id)
  end

  def page
    params[:page] || 1
  end
end

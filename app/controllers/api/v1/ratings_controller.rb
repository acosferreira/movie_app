class Api::V1::RatingsController < ApplicationController
  before_action  :authenticate_user!,  :except => [:index, :search]
  skip_before_action :verify_authenticity_token

  def index
    render json: Rating.all
  end

  def create
    rating = Rating.create!(rating_params)
    render json: rating
  end

  def destroy
    Rating.destroy(params[:id])
  end

  def update
    rating = Rating.find(params[:id])
    rating.update_attributes(rating_params)
    render json: rating
  end

  def search
    query = params[:query]
      ratings = Rating.where('name LIKE ? ',
                           "%#{query}%")
      render json: ratings
  end

  private

  def rating_params
    params.require(:rating).permit(:id, :value, :user_id, :movie_id)
  end

  def page
    params[:page] || 1
  end
end

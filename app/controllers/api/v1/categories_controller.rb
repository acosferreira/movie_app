class Api::V1::CategoriesController < ApplicationController

  before_action  :authenticate_user!,  :except => [:index, :search]
  skip_before_action :verify_authenticity_token

  def index
    render json: Category.all, methods: [:total_movies]
  end

  def create
    category = Category.create!(category_params)
    render json: category
  end

  def destroy
    Category.destroy(params[:id])
  end

  def update
    category = Category.find(params[:id])
    category.update_attributes(category_params)
    render json: category
  end

  def search
    query = params[:query]
    movies = Movie.where(category_id: query)
    render json: movies
  end

  private

  def category_params
    params.require(:category).permit(:id, :name, :user_id)
  end

  def page
    params[:page] || 1
  end
end

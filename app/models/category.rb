class Category < ApplicationRecord
  attr_accessor :total_movies
  belongs_to :user
  has_many :movies
  validates :name, presence: true, uniqueness: true

  def total_movies
    movies.size
  end
end

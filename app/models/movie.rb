class Movie < ApplicationRecord
  attr_accessor :rating_average
  belongs_to :category
  belongs_to :user
  has_many :ratings
  validates :title, :description, presence: true, uniqueness: true

  def rating_average
    ratings.present? ? ratings.sum(:value).to_i/ ratings.size.to_i : 0
  end
end

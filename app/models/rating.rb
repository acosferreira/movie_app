class Rating < ApplicationRecord
  belongs_to :user
  has_many :movies
  validates :value,  presence: true
  validates_inclusion_of :value, :in => 1..5

end

require 'faker/movie'
FactoryGirl.define do
  factory :movie, class: Movie do |p|
    p.title Faker::Movie.unique.quote
    p.description Faker::String.random(3..12)
  end
end

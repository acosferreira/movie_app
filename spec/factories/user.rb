require 'faker'
FactoryGirl.define do
  factory :user, class: User do |p|
    p.email Faker::Internet.unique.email
    p.password Faker::Number.number(6)
  end
end

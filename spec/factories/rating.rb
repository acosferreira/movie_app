FactoryGirl.define do
  factory :rating, class: Rating do |p|
    before(:create) { |user| p.user_id << FactoryGirl.create(:user) }
    p.value 3
  end
end

# frozen_string_literal: true

require 'database_cleaner'

RSpec.configure do |config|
  config.before(:suite) do
    DatabaseCleaner[:active_record, connection: :test].clean_with :truncation
  end

  config.before(:each) do
    DatabaseCleaner[:active_record, connection: :test].strategy = :truncation
  end

  config.before(:each) do
    Faker::Internet.unique.clear
    Faker::Code.unique.clear
    Faker::Number.unique.clear
    DatabaseCleaner.start
    DatabaseCleaner.clean
  end
end

require 'rails_helper'

RSpec.describe Category, type: :model do
  describe 'Ingredient flow' do
    context '.validate' do
      it { should validate_presence_of(:name) }
    end
    context '.error' do
      it { expect { described_class.create(name: nil) }.not_to change(described_class, :count) }
    end
  end
end

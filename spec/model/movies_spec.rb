require 'rails_helper'

RSpec.describe Movie, type: :model do
  describe 'Ingredient flow' do
    context '.validate' do
      it { should validate_presence_of(:title) }
      it { should validate_presence_of(:description) }
    end
    context '.error' do
      it { expect { described_class.create(title: nil) }.not_to change(described_class, :count) }
      it { expect { described_class.create(description: nil) }.not_to change(described_class, :count) }
    end
  end
end

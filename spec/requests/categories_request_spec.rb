require 'rails_helper'

RSpec.describe 'Categories', type: :request do
  describe 'GET /categories.json' do
    context 'when there are categories' do
      let(:user) {FactoryGirl.create(:user)}
      let(:drama) { FactoryGirl.create(:category, user:user) }
      let(:action) { FactoryGirl.create(:category, name: 'Suspense', user:user) }
      before do
        Category.create(name: drama.name,
                        user_id: user.id)
        Category.create(name: action.name,
                        user_id: user.id)
         get api_v1_categories_path

      end

      it 'returns list of categories' do
        expect(JSON.parse(response.body).count).to eql(2)
      end
    end
    context 'when there are no categories' do
      before do
         get api_v1_categories_path
      end
      it 'returns list of categories' do
        expect(JSON.parse(response.body).count).to eql(0)
      end
    end
  end

  describe 'POST /categories.json' do
    let!(:user) {FactoryGirl.create(:user)}
    context 'Should create a new category' do
      before do
        post api_v1_categories_path, params: {category: { user_id: user.id, title:'TestPost'}}
      end
      it 'return sucess' do
        expect(response.status).to eql(200)
      end
    end
    context 'Should validation error' do
      before do
        post api_v1_categories_path, params: {category: { user_id: user.id }}
      end
      # it 'return error' do
      #   expect(response).to have_http_status(:bad_request)
      # end
    end
  end

  describe 'GET /search.json' do
    let!(:user) {FactoryGirl.create(:user, email: Faker::Internet.unique.email)}
    let!(:drama) {FactoryGirl.create(:category, user_id: user.id)}
    let!(:suspense) {FactoryGirl.create(:category, name:'Suspense', user_id: user.id)}
    context 'Should update a category' do
      before do
        Movie.create!( user_id: user.id, description: 'bla bla bla', category_id: drama.id, title: 'Category Test')

        get search_api_v1_categories_path, params:{query: drama.id}
      end
      it 'should return documentary' do
        expect(response).to have_http_status(:ok)
        expect(JSON.parse(response.body).count).to eql(1)
      end
    end
    context 'Should return nil' do
      before do
        get search_api_v1_categories_path, params:{query: suspense.id}
      end
      it 'should return nil' do
        expect(response).to have_http_status(:ok)
        expect(JSON.parse(response.body).count).to eql(0)
      end
    end
  end
end

Rails.application.routes.draw do
  devise_for :users
  root to: 'home#index'
  get 'current_user', to: 'home#current_user'
  namespace :api do
    namespace :v1 do
     resources :movies, only: [:index, :create, :destroy, :update] do
       get :search, on: :collection
     end
     resources :categories, only: [:index, :create, :destroy, :update] do
       get :search, on: :collection
     end
     resources :ratings, only: [:index, :create, :destroy, :update] do
       get :search, on: :collection
     end
    end
  end
end

Rails.application.routes.draw do

  devise_for :users
  root to: 'application#home'

  resources :users do
    get :active_stats, on: :member
  end
  resources :tasks
end

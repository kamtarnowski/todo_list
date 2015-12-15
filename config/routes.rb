Rails.application.routes.draw do
  devise_for :users
  root to: 'application#home'

  resources :users, only: [:show]
end

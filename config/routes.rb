Rails.application.routes.draw do
  resources :tasks
  devise_for :users
  root to: 'application#home'

  resources :users
end

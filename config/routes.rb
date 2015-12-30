Rails.application.routes.draw do

  devise_for :users
  root to: 'application#home'

  resources :users
  resources :tasks
end

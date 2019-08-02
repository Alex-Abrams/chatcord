Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


namespace :api, defaults: {format: :json} do

  resource :user, only: [:create]

  resource :session, only: [:create, :destroy, :show]

  resources :servers do
    resources :channels, only: [:index, :create]
    resources :server_members, only: [:index]
  end

  resources :channels, only: [:show, :new] do
    resources :comments, only: [:index]
  end

  resources :server_members, only: [:create, :new, :destroy]

  resources :comments, only: [:new, :show, :create]


  resources :fofflines, only: [:index]

end


  root "static_pages#root"
end

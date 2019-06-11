Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

#   namespace :api, defaults: {format: :json} do
#     resource :user, only: [:create]
#     resource :session, only: [:create, :destroy, :show]
#     resources :servers, only: [:create, :destroy, :show, :update, :index]
#     resources :channels, only: [:show, :new, :index, :create]
#   end
#
#   root "static_pages#root"
# end

# testing if this fixes Bug #1
namespace :api, defaults: {format: :json} do
  resource :user, only: [:create]
  resource :session, only: [:create, :destroy, :show]
  
  resources :servers do
    resources :channels, only: [:index, :create]
  end

  resources :channels, only: [:show, :new]

  resources :message_boards, only: [:create, :new, :show]
end


  root "static_pages#root"
end

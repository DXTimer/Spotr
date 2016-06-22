Rails.application.routes.draw do
  devise_for :users, :controllers => { :omniauth_callbacks => "omniauth_callbacks" }

  root 'application#index'
  # get '*path' => 'application#index'

  namespace :api, defaults: { format: :json } do
    resources :users, shallow: true do
      resources :searches
    end
  end
end

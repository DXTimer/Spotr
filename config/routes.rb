Rails.application.routes.draw do
  devise_for :users, :controllers => { :omniauth_callbacks => "omniauth_callbacks" }

  root 'application#index'
  get '/login' => 'application#index'
  get '/dashboard' => 'application#index'

  if Rails.env.production?
     get '404', :to => 'application#index'
  end

  namespace :api, defaults: { format: :json } do
    resources :users, shallow: true do
      resources :searches
    end
  end
end

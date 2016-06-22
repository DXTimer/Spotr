Rails.application.routes.draw do

  root 'application#index'
  get '*path' => 'application#index'

  namespace :api, defaults: { format: :json } do

  end
end

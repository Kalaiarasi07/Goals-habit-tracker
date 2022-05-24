Rails.application.routes.draw do
  root 'homepage#index'

  scope path: 'api', as: 'api' do

    post "/login", to: "sessions#login"
    post "/signup", to: "sessions#signup"
    post "/logout", to: "sessions#destroy"


  end

  get '*path', to: 'react#index', via: :all
end

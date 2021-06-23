Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'courses#index'
  get 'new', to: 'courses#new'
  get 'about', to: 'pages#about'
  get 'contacto', to: 'pages#contacto'
  get 'lists', to: 'courses#lists'
  get 'infoC1', to: 'courses#infoC1'
  resources :students, except: [:destroy]

end

Rails.application.routes.draw do
  root 'home#index'
  mount_ember_assets :frontend, to: "/"
end

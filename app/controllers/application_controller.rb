class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here

  #user routes
  get '/users' do
    User.all.to_json(include: [:teams])
    #get all users from the database
    #users = User.all
    #return a JSON response with an array of all the user data
    # users.to_json
  end

  # get "/users/:id" do
  #   user = User.find(params[:id])

  #   #JSON response with associated teams and pokemon
  #   user.to_json(include: { teams: { include: :pokemon}})
  # end

  # #Pokemon routes
  # get '/pokemons' do
  #   #get all pokemon from the database in the order of their pokedex
  #   pokemons = Pokemon.all.order(:dex_num)
  #   pokemons.to_json
  # end

end

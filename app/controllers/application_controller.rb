class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here

  #user routes
  get '/users' do
   
    #get all users from the database
    users = User.all
    #return a JSON response with an array of all the user data
    users.to_json
  end

  get '/users/:id' do
     user = User.find(params[:id])

     #JSON response with associated starters and pokemon
     user.to_json(only: [:id, :name], include: { starters: {only: [:name], include: {pokemon: { only: [:name, :sprite]}}}} )
  end

  post '/users' do
    user = User.create(
      name: params[:name]
    )
      user.to_json
  end

  patch '/users/:id' do
    # find the starter using the ID
    user = User.find(params[:id])

    # update the starter in the database
    user.update(
      name: params[:name],
    )

    # send back the updated starter as JSON
    user.to_json
  end

  #Starter routes
  get '/starters' do 

    starters = Starter.all

    starters.to_json
  end

  post '/starters' do
    # create a new starter in the database
    # params is a hash of key-value pairs coming from the body of the request
    starters = Starter.create(
      name: params[:name],
      pokemon_id: params[:pokemon_id],
      user_id: params[:user_id]
    )

    # send back a response with the created starter as JSON
    starters.to_json
  end

  patch '/starters/:id' do
    # find the starter using the ID
    starters = Starter.find(params[:id])

    # update the starter in the database
    starters.update(
      name: params[:name],
      pokemon_id: params[:pokemon_id]
    )

    # send back the updated starter as JSON
    starters.to_json
  end

  delete '/starters/:id' do
    # find the starter using the ID
    starters = Starter.find(params[:id])

    # delete the starter
    starters.destroy

    # send a response with the deleted starter as JSON
    starters.to_json
  end
  
  #Pokemon routes
  get '/pokemons' do
  #   #get all pokemon from the database in the order of their pokedex
     pokemons = Pokemon.all.order(:dex_num)
     pokemons.to_json(include: :starters)
   end

end

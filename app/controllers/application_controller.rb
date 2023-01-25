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

     #JSON response with associated teams and pokemon
     user.to_json(include: { teams: {include: :pokemon}} )
  end

  post '/users' do
    user = User.create(
      name: params[:name]
    )
      user.to_json
  end

  patch '/users/:id' do
    # find the team using the ID
    user = User.find(params[:id])

    # update the team in the database
    user.update(
      name: params[:name],
    )

    # send back the updated team as JSON
    user.to_json
  end

  #Team routes
  get '/teams' do 

    teams = Team.all

    teams.to_json
  end

  post '/teams' do
    # create a new Team in the database
    # params is a hash of key-value pairs coming from the body of the request
    teams = Team.create(
      name: params[:name],
      pokemon_id: params[:pokemon_id],
      user_id: params[:user_id]
    )

    # send back a response with the created team as JSON
    teams.to_json
  end

  patch '/teams/:id' do
    # find the team using the ID
    teams = Team.find(params[:id])

    # update the team in the database
    teams.update(
      name: params[:name],
      pokemon_id: params[:pokemon_id]
    )

    # send back the updated team as JSON
    team.to_json
  end

  delete '/teams/:id' do
    # find the team using the ID
    teams = Team.find(params[:id])

    # delete the team
    teams.destroy

    # send a response with the deleted team as JSON
    review.to_json
  end
  
  #Pokemon routes
  get '/pokemons' do
  #   #get all pokemon from the database in the order of their pokedex
     pokemons = Pokemon.all.order(:dex_num)
     pokemons.to_json(include: :teams)
   end

end

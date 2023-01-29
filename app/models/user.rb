class User < ActiveRecord::Base
    has_many :starters
    has_many :pokemons, through: :starters
end
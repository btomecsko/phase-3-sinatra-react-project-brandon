class Team < ActiveRecord::Base
    belongs_to :pokemon
    belongs_to :user 
end

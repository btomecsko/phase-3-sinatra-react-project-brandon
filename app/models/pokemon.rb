class Pokemon < ActiveRecord::Base
    has_many :starters
    has_many :users, through: :starters
    
end
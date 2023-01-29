class Starter < ActiveRecord::Base
    belongs_to :pokemon
    belongs_to :user 
end

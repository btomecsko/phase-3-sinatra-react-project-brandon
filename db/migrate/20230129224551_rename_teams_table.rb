class RenameTeamsTable < ActiveRecord::Migration[6.1]
  def change
    rename_table :teams, :starters
  end
end

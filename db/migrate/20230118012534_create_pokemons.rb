class CreatePokemons < ActiveRecord::Migration[6.1]
  def change
    create_table :pokemons do |t|
      t.string :name
      t.string :type1
      t.string :type2
      t.integer :dex_num
      t.string :dex_info
      t.string :sprite
    end
  end
end

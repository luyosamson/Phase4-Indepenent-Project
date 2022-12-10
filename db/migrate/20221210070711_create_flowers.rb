class CreateFlowers < ActiveRecord::Migration[7.0]
  def change
    create_table :flowers do |t|
      t.string :name
      t.decimal :price
      t.string :image

      t.timestamps
    end
  end
end

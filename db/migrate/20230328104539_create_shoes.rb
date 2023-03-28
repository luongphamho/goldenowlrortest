class CreateShoes < ActiveRecord::Migration[7.0]
  def change
    create_table :shoes, :id => false do |t|
      t.string :id
      t.string :image
      t.string :name
      t.string :description
      t.string :price
      t.string :color
    end
  end
end

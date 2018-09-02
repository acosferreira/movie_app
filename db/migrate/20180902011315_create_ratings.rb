class CreateRatings < ActiveRecord::Migration[5.2]
  def change
    create_table :ratings do |t|
      t.integer :value
      t.integer :user_id, foreign_key: true
      t.references :movie, foreign_key: true
      t.timestamps
    end
  end
end

class CreateFoffline < ActiveRecord::Migration[5.2]
  def change
    create_table :fofflines do |t|
      t.string :name
    end
  end
end

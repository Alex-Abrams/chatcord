class CreateServers < ActiveRecord::Migration[5.2]
  def change
    create_table :servers do |t|
      t.string :title, null: false
      t.string :image_url
      t.integer :user_id, null: false
      t.integer :comment_id, null: false
      t.integer :admin_id, null: false
      t.integer :channel_id, null: false

      t.timestamps
    end

    add_index :servers, :user_id
    add_index :servers, :comment_id
    add_index :servers, :admin_id
    add_index :servers, :channel_id
  end
end

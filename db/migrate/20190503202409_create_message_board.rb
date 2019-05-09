class CreateMessageBoard < ActiveRecord::Migration[5.2]
  def change
    create_table :message_boards do |t|
      t.integer :channel_id, null: false

      t.timestamps
    end
  end
end

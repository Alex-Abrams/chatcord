class AddChannelIdToComments < ActiveRecord::Migration[5.2]
  def change
    add_column :comments, :channel_id, :integer
  end
end

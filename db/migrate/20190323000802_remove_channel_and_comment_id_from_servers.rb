class RemoveChannelAndCommentIdFromServers < ActiveRecord::Migration[5.2]
  def change
    remove_column :servers, :comment_id, :integer
    remove_column :servers, :channel_id, :integer
  end
end

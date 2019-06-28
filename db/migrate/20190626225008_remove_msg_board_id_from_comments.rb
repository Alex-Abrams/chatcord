class RemoveMsgBoardIdFromComments < ActiveRecord::Migration[5.2]
  def change
    remove_column :comments, :msg_board_id, :integer
  end
end

class AddTitleToMessageBoards < ActiveRecord::Migration[5.2]
  def change
    add_column :message_boards, :title, :string
  end
end

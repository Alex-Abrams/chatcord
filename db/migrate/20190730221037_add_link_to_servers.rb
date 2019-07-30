class AddLinkToServers < ActiveRecord::Migration[5.2]
  def change
    add_column :servers, :link, :string
  end
end

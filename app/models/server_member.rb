# == Schema Information
#
# Table name: server_members
#
#  id         :bigint(8)        not null, primary key
#  user_id    :integer          not null
#  server_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class ServerMember < ApplicationRecord
  belongs_to :server
  belongs_to :user
end

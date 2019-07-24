# == Schema Information
#
# Table name: message_boards
#
#  id         :bigint(8)        not null, primary key
#  channel_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  title      :string
#

class MessageBoard < ApplicationRecord

  belongs_to :channel,
    primary_key: :id,
    foreign_key: :channel_id,
    class_name: :Channel

  has_many :comments,
    primary_key: :id,
    foreign_key: :msg_board_id,
    class_name: :Comment


end

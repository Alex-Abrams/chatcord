# == Schema Information
#
# Table name: message_boards
#
#  id         :bigint(8)        not null, primary key
#  channel_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class MessageBoard < ApplicationRecord

  belongs_to :channel,
    primary_key: :id,
    foreign_key: :channel_id,
    class_name: :Channel

  # has_many :messages,
  #   primary_key: :id,
  #   foreign_key: :message_board_id,
  #   class_name: :Message


end

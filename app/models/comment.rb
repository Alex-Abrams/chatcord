# == Schema Information
#
# Table name: comments
#
#  id           :bigint(8)        not null, primary key
#  msg_board_id :integer          not null
#  user_id      :integer          not null
#  body         :text             not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#


class Comment < ApplicationRecord

  validates :body, presence: true

  belongs_to :message_board,
    primary_key: :id,
    foreign_key: :msg_board_id,
    class_name: :MessageBoard

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

end

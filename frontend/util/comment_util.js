export const createComment = (comment) => {
  return $.ajax({
    method: 'POST',
    url: 'api/comments',
    data: {comment}
  })
};

export const fetchComment = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/comments/${id}`
  })
);

export const fetchAllComments = (msg_board_id) => (
  $.ajax({
    method:'GET',
    url: `api/message_boards/${msg_board_id}/comments`
  })
);

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

export const fetchAllComments = (channel_id) => (
  $.ajax({
    method:'GET',
    url: `api/channels/${channel_id}/comments`
  })
);

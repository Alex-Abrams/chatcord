export const fetchMessageBoard = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/message_boards/${id}`
  })
);


export const createMessageBoard = (message_board) => (
  $.ajax({
    method: 'POST',
    url: 'api/message_boards'
  })
);


// TODO delete is for later when I actually can delete stuff 
// export const deleteMessageBoard = (id) => (
//   $.ajax({
//     method: 'DELETE',
//     url: 'api/message_boards'
//   })
// );

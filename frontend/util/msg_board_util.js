export const fetchMessageBoard = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/message_boards/${id}`
  })
);


export const createMessageBoard = (message_board) => {
  return $.ajax({
    method: 'POST',
    url: 'api/message_boards',
    data: { message_board }
  })
};



// TODO delete is for later when I actually can delete stuff
// export const deleteMessageBoard = (id) => (
//   $.ajax({
//     method: 'DELETE',
//     url: 'api/message_boards'
//   })
// );

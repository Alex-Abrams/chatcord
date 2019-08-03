// export const createServerLink = (user) => (
//   $.ajax({
//     method: 'POST',
//     url: 'api/server_members',
//     data: {user}
//   })
// );

export const createServerLink = (user_Id, server_Id) => (
  $.ajax({
    method: 'POST',
    url: 'api/server_members',
    data: {user_id: user_Id, server_id: server_Id}
  })
);

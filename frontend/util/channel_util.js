// http://localhost:3000/api/servers/server_id/channels
export const fetchServerChannels = (server_id) => (
  $.ajax({
    method: 'GET',
    url: `api/servers/${server_id}/channels`
  })
);

// http://localhost:3000/api/channels/1
// may nest this like fetchServerChannels
export const fetchSingleChannel = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/channels/${id}`
  })
);

// http://localhost:3000/api/servers/server_id/channels
export const createChannel = (channel, server_id) => {
  return $.ajax({
    method: 'POST',
    url: `api/servers/${server_id}/channels`,
    data: { channel }
  })
};

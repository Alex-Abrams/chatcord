export const fetchAllServers = () => (
  $.ajax({
    method: 'GET',
    url: 'api/servers'
  })
);

export const fetchSingleServer = (id) => (
  $.ajax({
    methood: 'GET',
    url: `api/servers/${id}`
  })
);

export const createServer = (server) => {
  return $.ajax({
    method: 'POST',
    url: 'api/servers',
    data: { server }
  })
};

export const deleteServer = (id) => {
  $.ajax({
    method: 'DELETE',
    url: `api/servers/${id}`
  })
};

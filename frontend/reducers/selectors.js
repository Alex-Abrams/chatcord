// export const findActiveServer = state => state.entities.activeServer.serverId;

export const selectAllServers = state => Object.values(state.entities.servers);

export const selectAllComments = state => Object.values(state.entities.comments);

export const selectAllChannels = state => Object.values(state.entities.channels);

export const selectServerChannels = (state, serverId) => {
  let serverChannels = Object.values(state.entities.channels);
  serverChannels.filter(channel => {
    return channel.id === serverId;
  });
  return serverChannels;
};

export const selectServerId = ({ server }, serverId) => {
  return server[serverId].id;
};

export const offlineList = (state) => {
  const array = Object.values(state.entities.offline);
  let result = [];
  array.forEach(el => {
    result.push(el.name);
  })
  return result
};


export const selectTitle = (state, channel_id) => {
  // works!!
  let title = state.entities.channels[channel_id] === undefined ? null : state.entities.channels[channel_id].title;
  return title;
};

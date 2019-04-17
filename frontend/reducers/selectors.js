export const selectAllServers = state => Object.values(state.entities.servers);

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

///
export const selectServerChannelsIds = ({ servers, channels }, server ) => {
  return server.channelIds;
};

export const selectServer = ({ servers }, serverId) => {
  return servers[serverId];
};

export const selectChannelsForServers = (state, serverId) => {
  return state.entities.channels;
};
///

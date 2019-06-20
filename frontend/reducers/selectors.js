export const findActiveServer = state => state.entities.activeServer.serverId;

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

// find the channel title for the message_board

export const findChannelTitle = (state, channelId) => {
  // return state.entities.channels[channelId].title;

  return 'hello';
  // return isNaN(state.entities.channels[channelId].title);
};

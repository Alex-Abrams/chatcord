// export const findActiveServer = state => state.entities.activeServer.serverId;

export const selectAllServers = state => Object.values(state.entities.servers);

export const selectAllComments = state => Object.values(state.entities.comments);

export const selectAllChannels = state => Object.values(state.entities.channels);

export const selectServerLink = (state, serverId) => {
  // console.log(Object.values(state.entities.servers).length === 0);
  return state.entities.servers[serverId].link;
};

// export const selectServerLink = (state, serverId) => {
//   let link = state.entities.servers[serverId] === undefined ? null : state.entities.servers[serverId].link;
//   return link;
// };

export const selectServer = (state, serverId) => state.entities.servers[serverId];

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

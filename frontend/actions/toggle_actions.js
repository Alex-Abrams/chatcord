export const TOGGLE_SERVER = "TOGGLE_SERVER";
export const UNTOGGLE_SERVER ="UNTOGGLE_SERVER";


export const toggleServer = (server_id) => ({
  type: TOGGLE_SERVER,
  server_id
});

export const unToggleServer = () => ({
  type: UNTOGGLE_SERVER,
});

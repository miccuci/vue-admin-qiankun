const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  permission_routers: state => state.permission.routers,
  addRouters: state => state.permission.addRouters,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  userInfo: state => state.user
}
export default getters

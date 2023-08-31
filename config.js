module.exports = {
  serverName: 'My Sync Server', // 同步服务名称
  'proxy.enabled': false, // 是否使用代理转发请求到本服务器
  'proxy.header': 'x-real-ip', // 代理转发的请求头 原始IP

  maxSnapshotNum: 10, // 公共最大备份快照数
  'list.addMusicLocationType': 'top', // 公共添加歌曲到我的列表时的方式 top | bottom，参考客户端的设置-列表设置-添加歌曲到我的列表时的方式

  users: [
    // 用户配置例子，有两种配置格式
    // {
    //   name: 'user1', // 用户名，必须，不能与其他用户名重复
    //   password: '123.def', // 是连接密码，必须，不能与其他用户密码重复，若在外网，务必增加密码复杂度
    //   // 当前版本存在密码长度缺陷问题，详情看：<https://github.com/lyswhut/lx-music-sync-server/issues/28>
    //   maxSnapshotNum: 10, // 可选，最大备份快照数
    //   'list.addMusicLocationType': 'top', // 可选，添加歌曲到我的列表时的方式 top | bottom，参考客户端的设置-列表设置-添加歌曲到我的列表时的方式
    // },
  ],


  // 所有名称以 env. 开头的配置将解析成环境变量
  // 'env.PORT': '9527',
  // 'env.BIND_IP': '0.0.0.0',
  // ...其他环境变量看Readme.md可用环境变量附录
}

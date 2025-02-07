

export default {
  namespaced: true,
  state() {
    return {
      history: [] // 存储访问过的路由路径
    }
   
  },
  mutations: {
    // 添加历史记录
    addHistory(state, path) {
      // 避免重复添加相邻的相同路径
      if (state.history[state.history.length - 1] !== path) {
        state.history.push(path);
       
      }
    },
  }
}

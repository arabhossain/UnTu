export default {
  namespace: true,
  state: () => ({
    tasks: [],
    markedTasks: []
  }),
  getters: {
    tasks: state => state.tasks,
    markedTasks: state => state.markedTasks,
  },
  actions: {
    /**
     * One of the fav. func. ;)
     * create task
     * @param commit
     * @param task
     * @returns {Promise<void>}
     */
    async createTask({commit}, task) {
      const rs = await this.$axios.post('api/tasks', task)
      if (rs.status === 200)
        commit('SET_TASKS', rs.data.data)
    },

    /**
     * Add to vuex storage that needs to marks as done
     * @param commit
     * @param state
     * @param task
     * @returns {Promise<void>}
     */
    async markTask({commit, state}, task) {
      let _markedTasks = state.markedTasks.filter(_task => task.id != _task.id)
      if (task.completed === 1)
        _markedTasks.push(task)
      commit('SET_MARK_TASK', _markedTasks)
    },

    /**
     * Mark task(s) as completed [bulk action]
     * @param commit
     * @param state
     * @returns {Promise<void>}
     */
    async saveTasks({commit, state}) {
      const rs = await this.$axios.put('api/tasks/bulk-mark', {payloads: state.markedTasks})

      if (rs.status === 200)
        commit('SET_TASKS', rs.data.data)
    },

    /**
     * Load tasks
     * @param commit
     * @returns {Promise<void>}
     */
    async loadTasks({commit}) {
      const rs = await this.$axios.get('api/tasks')
      if (rs.status === 200)
        commit('SET_TASKS', rs.data.data)
    },

    /**
     * Delete all task that user have
     * @param commit
     * @returns {Promise<void>}
     */
    async deleteTasks({commit}) {
     // const rs = await this.$axios.delete('api/tasks/clean-all')
     // console.log(rs.data)
     // if (rs.status === 200)
        commit('SET_TASKS', [])
    },

    /**
     * Delete task one by one
     * @param commit
     * @param task
     * @returns {Promise<void>}
     */
    async deleteTask({commit}, task) {
      const rs = await this.$axios.delete(`api/tasks/${task.id}`)
      if (rs.status === 200)
        commit('SET_TASKS', rs.data.data)
    },
  },
  mutations: {
    SET_TASKS(state, tasks) {
      state.tasks = tasks
    },
    SET_MARK_TASK(state, tasks) {
      state.markedTasks = tasks
    },
  }
}

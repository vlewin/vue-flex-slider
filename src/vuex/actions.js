export default {
  navigate: ({ commit }, page) => {
    console.log('navigate', page)
    commit('SET_PAGE', page)
  },

  setSelectedDay: ({ commit }, date) => {
    commit('SET_SELECTED_DAY', date)
  },

  fetchTimestamps: ({ commit }, week) => {
    console.log(commit)
    const Timestamp = {}
    Timestamp.all(week).then((response) => {
      console.log(response)
    }).catch((error) => {
      console.log(error)
    })
    // commit('SET_SELECTED_DAY', date)
  }
}

// state
export const state = () => ({
  programActive: 0
})

export const mutations = {
  SET_PROGRAM_ACTIVE (state, payload) {
    state.programActive = payload
  }
}

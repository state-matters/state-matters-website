const PLAY_VIDEO = "state_matters/bills/PLAY_VIDEO"

const intialState = {}

export default function reducer(state = intialState, action) {
  switch (action.type) {
    case PLAY_VIDEO:
      return state

    default:
      return state
  }
}

export const playVideo = _ => ({
  type: PLAY_VIDEO
})

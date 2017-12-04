const bool = false;

const SHOW_POPUP = 'SHOW_POPUP';

export const showPopup = () => ({
  type: SHOW_POPUP
})

export default (state = bool, action) => {
  switch (action.type) {
    case SHOW_POPUP:
      return !state
    default:
      return state
  }
}

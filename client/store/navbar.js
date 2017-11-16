const navbar = false;

const TOGGLE_NAVBAR = 'TOGGLE_NAVBAR';

export const toggleNavbar = () => ({
  type: TOGGLE_NAVBAR
})

export default (state = navbar, action) => {
  switch (action.type) {
    case TOGGLE_NAVBAR:
      return !state;
    default:
      return state;
  }
}

const dropdown = false;

const TOGGLE_DROPDOWN = 'TOGGLE_DROPDOWN';

export const toggleDropdown = () => ({
  type: TOGGLE_DROPDOWN
});

export default (state = dropdown, action) => {
  switch (action.type) {
    case TOGGLE_DROPDOWN:
      return !state;
    default:
      return state;
  }
}

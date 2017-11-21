const position = {
  width: 0,
  height: 0,
  left: 0,
  top: 0
};

const GET_POSITION = 'GET_POSITION';

export const getPosition = (width, height, left, top) => ({
  type: GET_POSITION,
  width,
  height,
  left,
  top
});

export default (state = position, action) => {
  switch (action.type) {
    case GET_POSITION:
      return Object.assign({}, state, {width: action.width, height: action.height, left: action.left, top: action.top});
    default:
      return state;
  }
}

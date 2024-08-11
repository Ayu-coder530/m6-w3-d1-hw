import { TOGGLE_DARKTHEME } from './actions';

const initialState = {
  theme: 'light',
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DARKTHEME:
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light',
      };
    default:
      return state;
  }
};

export default themeReducer;

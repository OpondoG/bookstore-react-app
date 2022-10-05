export const CHECK_STATUS = 'CHECK_STATUS';

const initialState = {
  categories: [],
};

export const checkStatus = (category) => ({
  type: CHECK_STATUS,
  payload: category,
});

export default function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case CHECK_STATUS:
      return {
        ...state,
        message: 'Under construction',
      };
    default:
      return state;
  }
}

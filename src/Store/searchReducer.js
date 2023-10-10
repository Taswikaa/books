const defaultState = {
  books: []
}

export const searchReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'LOAD':
      return {...state, books: [...state.books, ...action.payload]}
    default: return state;
  }
}
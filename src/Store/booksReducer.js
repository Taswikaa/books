const defaultState = {
  books: []
}

export const booksReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'LOAD':
      return {...state, books: [...state.books, ...action.payload]}
    case 'CLEAR':
      return {...state, books: []}
    default: return state;
  }
}
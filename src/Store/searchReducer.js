const defaultState = {
  query: '',
  categories: 'all',
  sorting: 'relevance'
}

export const searchReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ENTER':
      return {...state, query: action.payload.title, categories: action.payload.categories, sorting: action.payload.sorting}
    default: return state;
  }
}
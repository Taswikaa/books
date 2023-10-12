import bookTemplate from '../images/template.svg';

const defaultState = {
  src: '',
  title: '',
  categories: [],
  authors: [],
  description: ''
}

export const extendedeDataReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'LOAD-EXTENDED-DATA':
      const imageLink = action.payload.imageLinks ? action.payload.imageLinks.smallThumbnail : bookTemplate;

      return {
        ...state,
        src: imageLink,
        categories: action.payload.categories,
        title: action.payload.title,
        authors: action.payload.authors,
        description: action.payload.description
      }
    case 'CLEAR-EXTENDED-DATA':
      return {
        ...state,
        src: '',
        title: '',
        categories: [],
        authors: [],
        description: ''
      }
    default: return state;
  }
}
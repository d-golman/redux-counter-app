const reducer = (state = 0, action) => {
    switch(action.type){
      case 'INC':
        return ++state;
      case 'DEC':
        return --state;
      case 'CLS':
        return state = 0;
      default:
        return state;
    }
  }

  export default reducer
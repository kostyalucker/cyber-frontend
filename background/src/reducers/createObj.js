const initialState = [{ id: 'some' }]

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_OBJECT':
      return state.concat(action.payload || { id: Math.random() })
    default:
      return state
  }
}

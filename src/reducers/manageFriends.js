export function manageFriends (state = { friends: [] }, action) {
  switch(action.type) {
    case 'ADD_FRIEND':
      return {...state, friends: [...state.friends, action.friend]}
    case 'REMOVE_FRIEND':
      const indexOfFriendToRemove = state.friends.indexOf(action.id)
      const updatedFriends = [...state.friends]
      updatedFriends.splice(indexOfFriendToRemove -1, 1)
      return { ...state, friends: updatedFriends }
    default:
      return state
  }
}

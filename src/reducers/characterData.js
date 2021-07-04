const initialState = {
    characters: [{}, {}, {}],
    currentCharacter: {},
    deletedCharacter: {},
    errors: null
}

export const characterReducer = (state = initialState, action) => {
    switch(action.type) {
        case "SET_CHARACTERS":
            return {...state, characters: action.characters}
        case "SELECT_CHARACTER":
            return {...state, currentCharacter: action.currentCharacter}
        case "SET_DELETED":
            return {...state, deletedCharacter: action.character}
        case "NAME_ERROR":
            return {...state, errors: action.errors}
        default:
            return state
    }
}
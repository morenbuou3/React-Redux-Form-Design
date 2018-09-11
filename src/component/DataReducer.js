const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text
                }
            ];
        case 'REMOVE_ITEM':
            return state.filter(item => (item.id !== action.id));
        default:
            return state
    }
}

export default todos
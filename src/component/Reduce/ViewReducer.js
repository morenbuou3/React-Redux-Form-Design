const toshow = (state = {display: ''}, action) => {
    switch (action.type) {
        case 'SHOW':
            return {display: ''};
        case 'HIDE':
            return {display: 'none'};
        default:
            return state
    }
}

export default toshow
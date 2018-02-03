

export default (state = [], action) => {
    switch(action.type) {
        case "ADD_ALARM":
            return [
                ...state,
                action.alarm
            ]

        case "REMOVE_ALARM":
            return state.filter(({id}) => id !== action.id)

        case "EDIT_ALARM":
            return state.map((alarm) => {
                if (alarm.id === action.id) {
                    return {
                        ...alarm,
                        ...action.updates
                    }
                } else return alarm
            })

        default:
            return state
    }
}

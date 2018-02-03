import uuid from 'uuid';
import moment from 'moment';

export const AddAlarmClock = ({
    description = "",
    executionTime = moment(),
    id = uuid(),
    on = true
} = {}) => ({
    type: "ADD_ALARM",
        alarm: {
            id,
            description,
            executionTime,
            on
        }
})

export const RemoveAlarmClock = ({ id } = {}) => ({
    type: "REMOVE_ALARM",
    id
})

export const EditAlarmClock = (id, updates) => ({
    type: "EDIT_ALARM",
    id,
    updates
})
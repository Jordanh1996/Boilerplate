import React from 'react';
import {connect} from 'react-redux';
import {AddAlarmClock, RemoveAlarmClock, EditAlarmClock} from '../actions/alarm';

class Getstate extends React.Component {

    constructor(props) {
        super(props)
    }

    State(state) {
        console.log(state)
    }

    AddAlarm() {
        this.props.addAlarm()
    }

    RemoveAlarm() {
        this.props.removeAlarm()
    }

    EditAlarm() {
        this.props.editAlarm()
    }

    render() {
        return (
            <div>
                <button onClick={() => {
                    this.State(this.props.state)                    
                }}>
                    get state
                </button>
                <button onClick={() => this.AddAlarm()}>
                    add alarm
                </button>
                <button onClick={() => this.RemoveAlarm()}>
                    remove alarm
                </button>
                <button onClick={() => this.EditAlarm()}>
                edit alarm
                </button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        state: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addAlarm: () => dispatch(AddAlarmClock({id: 123})),
        removeAlarm: () => dispatch(RemoveAlarmClock({id: 123})),
        editAlarm: () => dispatch(EditAlarmClock(123, {description: "edited"}))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Getstate);

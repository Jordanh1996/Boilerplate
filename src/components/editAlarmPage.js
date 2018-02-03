import React from 'react';
import AlarmForm from './alarmForm';
import {connect} from 'react-redux';
import {EditAlarmClock} from '../actions/alarm';


class EditAlarmPage extends React.Component {


    OnEditAlarm = (alarm) => {
        this.props.EditAlarm(this.props.match.params.id, alarm)
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <AlarmForm 
                OnAddAlarm={this.OnEditAlarm}
                alarmclock={this.props.alarm}
                />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        EditAlarm: (id, alarm) => dispatch(EditAlarmClock(id, alarm))
    }
}

const mapStateToProps = (state, props) => {
    return {
        alarm: state.alarm.find((ala) => ala.id === props.match.params.id)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditAlarmPage)
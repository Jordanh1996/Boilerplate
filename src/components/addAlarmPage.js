import React from 'react';
import {connect} from 'react-redux';
import AlarmForm from './alarmForm';
import {AddAlarmClock} from '../actions/alarm';

class AddAlarmPage extends React.Component {

    OnAddAlarm = (alarmclock) => {
        this.props.AddAlarm(alarmclock)
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <AlarmForm OnAddAlarm={this.OnAddAlarm} />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        AddAlarm: (alarm) => dispatch(AddAlarmClock(alarm))
    }
}

export default connect(undefined, mapDispatchToProps)(AddAlarmPage)
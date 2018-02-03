import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import {Link} from 'react-router-dom';
import {RemoveAlarmClock} from '../actions/alarm';
import { setTimeout, clearTimeout } from 'timers';
import AlarmModal from './alarmModal';

class Alarmitem extends React.Component {

    state = {
        toggle: true,
        timer: 0,
        alarmOpen: false,
        timeLeft: 0
    }

    componentDidMount() {
        this.setState(() => ({
            timer: setTimeout(() => {this.setState(() => ({ alarmOpen: true }))}, (this.props.alarm.executionTime - moment().unix()) * 1000)
        }))
        setInterval(() => {
            this.setState(() => ({
                timeLeft: moment() - this.state.alarm.executionTime
            }, 60000))
        })
    }

    componentWillUnmount() {
        clearTimeout(this.state.timer)
    }

    closeAlarm = () => {
        this.setState(() => ({
            alarmOpen: false
        }))
    }
    
    OnRemove = () => {
        this.props.remove(this.props.alarm.id)
    }
    
    OnToggle = () => {
        console.log(this.state)
    }


    render() {
        return (
    <div>
        <Link to={`/edit/${this.props.alarm.id}`}>
            {this.props.alarm.description} - {moment.unix(this.props.alarm.executionTime).format("dddd, MMMM Do YYYY, HH:mm")}
        </Link>
            
        <button onClick={this.OnRemove}>Remove</button>
        {
            moment().to(this.props.alarm.executionTime)
        }

        <button onClick={this.OnToggle}>asd</button>

        <AlarmModal
            isopen={this.state.alarmOpen}
            isclose={this.closeAlarm}
            description={this.props.alarm.description}
        />
    </div>
    )}
}

const mapDispatchToProps = (dispatch) => ({
    remove: (id) => dispatch(RemoveAlarmClock({id}))
})


export default connect(undefined , mapDispatchToProps)(Alarmitem)
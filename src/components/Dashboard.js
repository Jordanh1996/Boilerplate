import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Getstate from './getstate';
import Alarmlist from './alarmList';



const Dashboard = (props) => (
    <div>
        <h1>Alarm Clock Dashboard</h1>
        <p>here will be the alarm clock list</p>
        <Link className='button' to='/addAlarm'>
            Add an Alarm
        </Link>
        <Alarmlist />
        <Getstate />
    </div>
)

export default Dashboard
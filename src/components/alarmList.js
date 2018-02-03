import React from 'react';
import Alarmitem from './alarmItem';
import {connect} from 'react-redux';


class Alarmlist extends React.Component {
    
    constructor(props) {
        super(props);
    }
    
    

    render () {
        return (
            <div>
            {
                this.props.alarms.length === 0 ? <p>There are no alarms</p> :
                (this.props.alarms.map((alarm) => {
                    return <Alarmitem
                    key={alarm.id}
                    alarm={alarm}
                    />
                })) 
            }
            </div>
        )
}}

const mapStateToProps = (state) => {
    return {
        alarms: state.alarm
    }
}

export default connect(mapStateToProps)(Alarmlist)
import React from 'react';
import moment from 'moment';

class AlarmForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            description: props.alarmclock ? props.alarmclock.description : "",
            year: props.alarmclock ? moment.unix(props.alarmclock.executionTime).get('year') : moment().year(),
            month: props.alarmclock ? moment.unix(props.alarmclock.executionTime).get('month') + 1 : moment().month(),
            day: props.alarmclock ? moment.unix(props.alarmclock.executionTime).get('date') : moment().date(),
            hour: props.alarmclock ? moment.unix(props.alarmclock.executionTime).get('hour') : moment().hours(),
            minute: props.alarmclock ? moment.unix(props.alarmclock.executionTime).get('minute') : moment().minutes()
        }
    }


    OnDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({description}))
    }

    OnYearChange = (e) => {
        const year = e.target.value;
        this.setState(() => ({year}))
    }


    OnMonthChange = (e) => {
        const month = e.target.value;
        this.setState(() => ({month}))
    }

    OnDayChange = (e) => {
        const day = e.target.value;
        this.setState(() => ({day}))
    }

    OnHourChange = (e) => {
        const hour = e.target.value;
        this.setState(() => ({hour}))
    }
    
    OnMinuteChange = (e) => {
        const minute = e.target.value;
        this.setState(() => ({minute}))
    }

    onSubmit = (e) => {
        e.preventDefault();
        const time = moment().set({'year': parseInt(this.state.year),
        'month': this.state.month === 0 ? parseInt(this.state.month) : parseInt(this.state.month) - 1,
        'date': parseInt(this.state.day),
        'hour': parseInt(this.state.hour),
        'minute': parseInt(this.state.minute),
        'second': 0,
        'millisecond': 0
        });
        this.props.OnAddAlarm({description: this.state.description, executionTime: time.unix()})
    }
    

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                AddAlarmPage
                <input 
                type="text" 
                placeholder="Description"
                autoFocus
                value={this.state.description}
                onChange={this.OnDescriptionChange}
                />
                <select
                value={this.state.day}
                onChange={this.OnDayChange}
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                </select>

                <select
                value={this.state.month}
                onChange={this.OnMonthChange}
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                </select>

                <select
                value={this.state.hour}
                onChange={this.OnHourChange}
                >
                    <option value="0">00</option>
                    <option value="1">01</option>
                    <option value="2">02</option>
                    <option value="3">03</option>
                    <option value="4">04</option>
                    <option value="5">05</option>
                    <option value="6">06</option>
                    <option value="7">07</option>
                    <option value="8">08</option>
                    <option value="9">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                </select>

                <select
                value={this.state.minute}
                onChange={this.OnMinuteChange}
                >
                    <option value="0">00</option>
                    <option value="1">01</option>
                    <option value="2">02</option>
                    <option value="3">03</option>
                    <option value="4">04</option>
                    <option value="5">05</option>
                    <option value="6">06</option>
                    <option value="7">07</option>
                    <option value="8">08</option>
                    <option value="9">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                    <option value="32">32</option>
                    <option value="33">33</option>
                    <option value="34">34</option>
                    <option value="35">35</option>
                    <option value="36">36</option>
                    <option value="37">37</option>
                    <option value="38">38</option>
                    <option value="39">39</option>
                    <option value="40">40</option>
                    <option value="41">41</option>
                    <option value="42">42</option>
                    <option value="43">43</option>
                    <option value="44">44</option>
                    <option value="45">45</option>
                    <option value="46">46</option>
                    <option value="47">47</option>
                    <option value="48">48</option>
                    <option value="49">49</option>
                    <option value="50">50</option>
                    <option value="51">51</option>
                    <option value="52">52</option>
                    <option value="53">53</option>
                    <option value="54">54</option>
                    <option value="55">55</option>
                    <option value="56">56</option>
                    <option value="57">57</option>
                    <option value="58">58</option>
                    <option value="59">59</option>
                    <option value="60">60</option>
                </select>

                <select
                onChange={this.OnYearChange}
                value={this.state.year}
                >
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                </select>

                <button>
                    Set your Clock
                </button>
            </form>
        )
    }
}

export default AlarmForm;
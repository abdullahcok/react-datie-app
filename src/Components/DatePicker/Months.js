import React, {Component} from 'react';
import Weekdays from './Weekdays';
import Days from './Days';
import './DatePicker.css';

const wdays = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
];

export default class Months extends Component{
      constructor(props){
          super(props);

          this.renderWeek = this.renderWeek.bind(this);
          this.handleMouseEnter = this.renderWeek.bind(this);
          this.handleMouseLeave = this.renderWeek.bind(this);

          this.state = {
              hoveredDate: null,
          }
      }

      render(){
            const {month, year} = this.props;
            const weekDaysMarkUp = wdays.map(wday => {
                  return(
                        <Weekdays key={wday}
                                              title={abbreaviationFromWeekday(wday)}
                                              current = {true}
                                              label={wday}
                        />
                  )
            });

            const weeks = getWeeksForMonth(month, year);
            const weeksMarkup = weeks.map((week, index) => {
                  return(
                        <div role="row" className="Weeks" key={index}>
                              {week.map(this.renderWeek)}
                        </div>
                  )
            });

            return(
                  <React.Fragment>
                      <div className="WeekdaysContainer">{weekDaysMarkUp}</div>
                      {weeksMarkup}
                  </React.Fragment>
            )
      }

      renderWeek(fullDate, dayIndex){
          const {onDayClick} = this.props;
          const {hoveredDate} = this.state;
            if(fullDate == null){
                  return <Days key={dayIndex}/>;
            }

            const date = fullDate.getDate();
            return <Days key={dayIndex}
                                    fullDate = {fullDate}
                                    onClick = {onDayClick}
                                    selected = {date === this.props.date}
                                    hovering = {date === hoveredDate}
                                    onMouseenter = {this.handleMouseEnter}
                                    onMouseleave = {this.handleMouseLeave}
                         />;
      }

      handleMouseEnter(date){
          this.setState({
                hoveredDate: date,
          })
      }

      handleMouseLeave(date){
          this.setState({
                hoveredDate: null,
          })
      }
}



function abbreaviationFromWeekday(wday){
      return wday.substring(0, 3);
}


const WEEK_LENGTH = 7;

function getWeeksForMonth(month, year){
      const firstOfMonth = new Date(year, month, 1);
      const firstDayOfWeek = firstOfMonth.getDay();
      const weeks = [[]];

      let currentWeek = weeks[0];
      let currentDate = firstOfMonth;

      for(let i=0; i>firstDayOfWeek; i++){
            currentDate.push(null);
      }

      while(currentDate.getMonth() === month){
            if(currentWeek.length === WEEK_LENGTH){
                  currentWeek = [];
                  weeks.push(currentWeek);
            }

            currentWeek.push(currentDate);
            currentDate = new Date(year, month, currentDate.getDate() + 1);
      }

      while(currentWeek.length < 7){
            currentWeek.push(null);
      }

      return weeks;
}

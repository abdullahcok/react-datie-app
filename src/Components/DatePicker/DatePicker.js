import React, {Component} from 'react';
import './DatePicker.css';
import Months from './Months';

export default class DatePicker extends Component{
      render(){
          const {fullDate, onDayClick} = this.props;

          const dateNumber = fullDate.getDate();
          const monthNumber = fullDate .getMonth();
          const yearNumber = fullDate.getFullYear();
          const monthName = getMonthName(monthNumber);

          return(
              <div className="DatePickerContainer">
                    <div className="DatePickerContainer__Title">{monthName}</div>
                    <Months date = {dateNumber}
                                     month = {monthNumber}
                                     year = {yearNumber}
                                     onDayClick = {onDayClick}
                      />

              </div>
            );
      }
}


const months = ["January",
                              "February",
                              "March",
                              "April",
                              "May",
                              "June",
                              "July",
                              "August",
                              "September",
                              "October",
                              "November",
                              "December"
                            ];

    function getMonthName(index){
            return months[index];
    }

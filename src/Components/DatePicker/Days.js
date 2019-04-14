import React from 'react';

export default function Days({fullDate, onClick, selected, onMouseenter, onMouseleave, hovering}){
      if(fullDate == null){
            return <div className="EmptyStateDays" />
      }

      const date = fullDate.getDate();
      let className = "Days";

      if(selected){
          className = "Day Day--selected"
      } else if(hovering){
          className = "Days Day--hovering";
      }

      return(
            <button className={className}
                           onClick={onClick.bind(this, date)}
                >
                           {date}
           </button>
      );
}

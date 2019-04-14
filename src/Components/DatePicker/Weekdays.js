import React from 'react';

export default function Weekdays({label, title}){
      return(
              <div aria-label={label} className="Weekdays">
                    {title}
              </div>
      );
}

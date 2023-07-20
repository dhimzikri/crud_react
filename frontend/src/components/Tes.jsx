import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Tes = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    // <div>Tes</div>
    <DatePicker 
    selected={startDate} 
    onChange={(date) => 
      setStartDate(date)} />
  );
};

export default Tes;

import './App.css';
import React, { useState } from 'react';
import { DatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

function App() {
  let image = "https://picsum.photos/200/300"
  const [selectedDate, handleDateChange] = useState(new Date());
  return (
    <div className="App">
      <header className="App-header">
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <DatePicker value={selectedDate} onChange={handleDateChange} />
      </MuiPickersUtilsProvider>
        <p>
          <img src={image}></img>
        </p>
      </header>
    </div>
  );
}

export default App;

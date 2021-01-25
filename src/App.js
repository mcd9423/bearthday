import './App.css';
import React, { useState } from 'react';
import { DatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import axios from 'axios';

let imageID = 0;
let image = `https://api.nasa.gov/EPIC/archive/natural/2019/05/30/png/${imageID}.png?api_key=DEMO_KEY` 
let date = DatePicker.value;

function App() {
  const [selectedDate, handleDateChange] = useState(new Date());
  return (
    <div className="App">
      <header className="App-header">
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <DatePicker value={selectedDate} onChange={handleDateChange} />
      </MuiPickersUtilsProvider>
      <button onClick={submit}></button>
        <p>
          <img src={image}></img>
        </p>
      </header>
    </div>
  );
}

function submit(){
  getImage();
}

// https://api.nasa.gov/EPIC/archive/natural/2019/05/30/png/epic_1b_20190530011359.png?api_key=DEMO_KEY
function getImage() {
  axios.get(`https://api.nasa.gov/EPIC/api/natural/date/2019-05-30?api_key=DEMO_KEY`)
    .then(res => {
      if(res.data[0].image){
        this.imageID = res.data[0].image
      }
      else {
        this.date = moment().add(1, 'days')
      }
    })
}




export default App;

import './App.css';
import React, { useState } from 'react';
import { DatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import axios from 'axios';
import Image from './Image';
import moment from 'moment'


let imageID = 0;
let date = DatePicker.value;

function App() {
  const [selectedDate, handleDateChange] = useState(new Date());
  const [image, setImage] = useState('');
  const [date, setDate] = useState('')
  const [imageDate, setImageDate] = useState('')
  
  function submit(){
    setDate(moment(selectedDate).format("YYYY-MM-DD"))
    setImageDate(moment(selectedDate).format("YYYY/MM/DD"))
    getImage();
  }

  function getImage() {
    axios.get(`https://api.nasa.gov/EPIC/api/natural/date/${date}?api_key=x7ukJY1A53jE5maUdJuUP2SmcaZLetRDKaqf2JvU`)
      .then(res => {
        if(res.data[0]){
          // API calls for different date formats than other API call, so need two different dates
          imageID = res.data[0].image
          setImage(`https://api.nasa.gov/EPIC/archive/natural/${imageDate}/png/${imageID}.png?api_key=x7ukJY1A53jE5maUdJuUP2SmcaZLetRDKaqf2JvU`)
        }
        else {
          getNextDay();
        }
      })
  }

  function getNextDay(){
    handleDateChange(moment(selectedDate).add(1, 'days').format("YYYY-MM-DD"))
    getImage()
  }

  return (
    <div className="App">
      <p>{image}</p>
      <p>Select your most recent birthday!</p>
      <div>
        <p>This picture was taken on {date}</p>
      </div>
      <header className="App-header">
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <DatePicker value={selectedDate} onChange={handleDateChange} />
          <button onClick={submit}>Submit</button>
        </MuiPickersUtilsProvider>
        <Image image={image} key={image}></Image>
      </header>
    </div>
  );
}

export default App;

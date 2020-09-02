import React ,{useState, useEffect} from 'react';


function ShowTime() {
  var countDownDate = new Date("Jan 1, 2021").getTime();
  var now = new Date().getTime();
  var day = new Date().getDay();
  var specificDay ="";
  var timeleft = countDownDate - now;
  var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
  const [theTime, setTheTime] = useState(new Date().toLocaleString());
  calculateSpecificDay();

  useEffect(() => {
    const interval = setInterval(() => setTheTime(new Date().toLocaleString()),1000);
    return ()=>clearInterval(interval);
  },[]);

  function calculateSpecificDay() {
    switch (day) {
      case 0:
        specificDay = "Sunday";
        break;
        case 1:
          specificDay = "Monday";
          break;
          case 2:
            specificDay = "Tuesday";
            break;
            case 3:
              specificDay = "Wednesday";
              break;
              case 4:
                specificDay = "Thursday";
                break;
                case 5:
                  specificDay = "Friday";
                  break;
                  case 6:
                    specificDay = "Saturday";
                    break;
        default:
          console.log("Error in Showtime module");
    }
  }

  return (<div className="ShowTime">
    <h2>The current time is <span className="styleTime">{theTime} {specificDay}</span></h2>
  <h2>{days} days {hours} hours and {minutes} minutes {seconds} seconds left till 2021! Seize the day!</h2></div>
    );
}

export default ShowTime;

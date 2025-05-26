
import '../styles/calendar.css'
import data from "../data/calendarData.json"
import Card from './Card'
import { PiTooth } from "react-icons/pi";
import { GiMuscleUp } from "react-icons/gi";
import Upcoming from './Upcoming';

const Calendar = () => {
    return (
        <div className='calendar-container'>
            <div className='calendar-header'>
                <p>October</p>
                <p>&larr; &rarr;</p>
            </div>

            <div className='calendar-grid'>
                {data.map((item) => {
                    return (
                        <div>
                            <p>{item.day}</p>
                            <p>{item.date}</p>
                            <p>{item.Interval1}</p>
                            <p>{item.Interval2}</p>
                            <p>{item.Interval3}</p>

                        </div>
                    )
                })}
            </div>
            <div className='today-schedule'>
                <Card backgroundColor='#2f329b'  >
                    <p style={{ color: 'white' }} >Dentist <span><PiTooth size={25} /></span></p>
                    <p style={{ color: 'white' }}>09:00 -11:00</p>
                    <p style={{ color: 'white' }}>Dr.cameron Willimson</p>
                </Card>
                <Card backgroundColor='#d8def8'>
                    <p>physiotherapy  Appointement <span><GiMuscleUp size={25} /></span></p>
                    <p>11:00 -12:00</p>
                    <p>Dr.Kevin Djones</p>
                </Card>

            </div>
            <Upcoming />

        </div>
    )
}

export default Calendar

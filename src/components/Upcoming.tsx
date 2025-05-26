import Card from './Card'
import "../styles/upcoming.css"

const Upcoming = () => {
    return (
        <div>
            <h3>The Upcoming Schedule</h3>
            <h5>on Thursday</h5>
            <div className='row'>
                <Card backgroundColor='#d8def8'>
                    <p>Health checkup complete</p>
                    <p>11:00 Am</p>
                </Card>
                <Card backgroundColor='#d8def8'>
                    <p>Opthamologist</p>
                    <p>14:00 Pm</p>
                </Card>
            </div>
            <h5>on Friday</h5>
            <div className='row'>
                <Card backgroundColor='#d8def8'>
                    <p>Cardiologist</p>
                    <p>11:00 Am</p>
                </Card>
                <Card backgroundColor='#d8def8'>
                    <p>Neurologist</p>
                    <p>16:00 Pm</p>
                </Card>
            </div>
        </div>
    )
}

export default Upcoming

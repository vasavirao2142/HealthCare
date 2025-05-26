import Card from './Card'
import '../styles/health.css'
import ProgressBar from "@ramonak/react-progress-bar";

const HealthStatus = () => {
    return (
        <div className='health-container'>
            <Card>
                <p>Lungs</p>
                <p>Date:26 MAY 2025</p>
                <ProgressBar completed={60} customLabel=" " bgColor="#863639" />
            </Card>
            <Card>
                <p>Teeth</p>
                <p>Date:26 MAY 2025</p>
                <ProgressBar completed={60} customLabel=" " bgColor="#70b9ae" />
            </Card>
            <Card>
                <p>Bone</p>
                <p>Date:26 MAY 2025</p>
                <ProgressBar completed={60} customLabel=" " bgColor="#f8755f" />
            </Card>

        </div>
    )
}

export default HealthStatus

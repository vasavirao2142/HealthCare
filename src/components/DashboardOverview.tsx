import AnatomySection from './AnatomySection'
import "../styles/dashboardOverview.css"
import HealthStatus from './HealthStatus'
import Activity from './Activity'


const DashboardOverview = () => {
    return (
        <>

            <div className="flex-container" >
                <div className='overview'>
                    <AnatomySection />
                    <HealthStatus />
                </div>
                <div>
                    <Activity />
                </div>
            </div>
        </>

    )
}

export default DashboardOverview

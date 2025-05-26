
import Calendar from '../components/Calendar'
import DashboardOverview from '../components/DashboardOverview'

import '../styles/dashboard.css'
const Dashboard = () => {
  return (
    <div className="main-container">
      <DashboardOverview />
      <Calendar />
    </div >
  )
}

export default Dashboard
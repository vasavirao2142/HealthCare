import body from "../assets/body.png"
import '../styles/anatomy.css'
import Card from "./Card"

const AnatomySection = () => {
    return (
        <Card>
            <div className="image-container">
                <img src={body} className="body-image" alt="body" />
                <div className="status">❤️Healthy Heart</div>
                <div className="leg-status">🦵Healthy Leg</div>
            </div>
        </Card>

    )
}

export default AnatomySection

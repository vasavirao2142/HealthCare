
import '../styles/card.css'

interface CardProps {
    children: React.ReactNode;
    backgroundColor?: string;

}
const Card: React.FC<CardProps> = ({ children, backgroundColor }) => {
    return (
        <div className='container' style={{ backgroundColor }}>
            {children}
        </div>
    )
}

export default Card

import { FaTimes } from 'react-icons/fa'

const Card = ({ card, onDelete, onToggle }) => {
    return (
        <div className = {`card ${card.unsellable ? 'unsellable' : ''}`} onDoubleClick = {() => onToggle(card.id)}>
            <h3>{card.text} <FaTimes style = {{color: 'red'}} onClick = {() => onDelete(card.id)} /></h3>
            <p>{card.edition} ${card.price}</p>
            <p>{card.image}</p>
        </div>
    )
}

export default Card

import Header from './components/Header'
import Cards from './components/Cards'
import BuyCard from './components/BuyCard'
import { useState } from 'react'

const App = () => {
    const[cards, setCards] = useState([
        {
            id: 1,
            text: 'Black Lotus',
            edition: 'Unlimited',
            price: 500000,
            image: <img src = 'https://c1.scryfall.com/file/scryfall-cards/large/front/4/a/4a2e428c-dd25-484c-bbc8-2d6ce10ef42c.jpg?1559591808' alt = 'Black Lotus' width = '400' height = '550' />,
            unsellable: false,
        },
        {
            id: 2,
            text: 'Web',
            edition: 'Limited Edition Beta',
            price: 325,
            image: <img src = 'https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=479&type=card' alt = 'Web' width = '400' height = '550' />,
            unsellable: false,
        },
    ])

    const buyCard = (card) => {
        const id = Math.floor(Math.random() * 100000)
        let newCard = { id, ...card}
        newCard.image = <img src = {card.image} alt = {card.text} width = '400' height = '550' />
        setCards([...cards, newCard])
    }

    const deleteCard = (id) => {
        setCards(cards.filter((card) => card.id !== id))
    }

    const toggleSell = (id) => {
        setCards(cards.map((card) => card.id === id ? {...card, unsellable: !card.unsellable} : card))
    }

    return (
        <div className="container">
            <Header />
            <BuyCard onBuy = {buyCard} />
            {cards.length > 0 ? <Cards cards = {cards} onDelete = {deleteCard} onToggle = {toggleSell} /> : 'No cards in collection'}
        </div>
    )
}

export default App

import { useState } from 'react'

const BuyCard = ({ onBuy }) => {
    const [text, setText] = useState('')
    const[edition, setEdition] = useState('')
    const[price, setPrice] = useState('')
    const[image, setImage] = useState('')
    const[unsellable, setUnsellable] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert('Please enter card information.')
            return
        }

        onBuy({ text, edition, price, image, unsellable })
        setText('')
        setEdition('')
        setPrice('')
        setImage('')
        setUnsellable(false)
    }
    return (
        <form className = 'add-form' onSubmit = {onSubmit}>
            <div className = 'form-control'>
                <label>Card Name</label>
                <input type = 'text'
                       placeholder = 'New Card Name'
                       value = {text}
                       onChange = {(e) => setText(e.target.value)}
                />
            </div>

            <div className = 'form-control'>
                <label>Card Edition</label>
                <input type = 'text'
                       placeholder = 'New Card Edition'
                       value = {edition}
                       onChange = {(e) => setEdition(e.target.value)}
                />
            </div>

            <div className = 'form-control'>
                <label>Card Price</label>
                <input type = 'text'
                       placeholder = 'New Card Price'
                       value = {price}
                       onChange = {(e) => setPrice(e.target.value)}
                />
            </div>

            <div className = 'form-control'>
                <label>Card Image</label>
                <input type = 'text'
                       placeholder = 'New Card Image'
                       value = {image}
                       onChange = {(e) => setImage(e.target.value)}
                />
                <img src = {image} alt = {text} width = '400' height = '550' />
            </div>

            <div className = 'form-control form-control-check'>
                <label>Card Unsellable</label>
                <input type = 'checkbox'
                       checked = {unsellable}
                       value = {unsellable}
                       onChange = {(e) => setUnsellable(e.currentTarget.checked)}
                />
            </div>

            <input type = 'submit' value = 'Save New Card' className = 'btn btn-block' />
        </form>
    )
}

export default BuyCard

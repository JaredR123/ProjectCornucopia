import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {
    const onClick = () => {
        console.log('Click!')
    }

    return (
        <header className = 'header'>
            <h1>{props.title}</h1>
            <Button color = 'blue' text = 'Buy' onClick = {onClick} />
        </header>
    )
}

Header.defaultProps = {
    title: "Card Collection"
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

const headingStyle = {
    color: 'red',
    backgroundColor: 'black'
}

export default Header

import React from 'react'
import PropTypes from 'prop-types'

const Message = ({message, author}) =>(
    <p>
        {author}: {message}
    </p>
)

Message.propTypes = {
    message: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
}

export default Message;
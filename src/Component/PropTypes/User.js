import React from 'react'

import PropTypes from "prop-types"

const User = (props) => {
  return (
    <div>
        <h1>{props.userName}</h1>
        <h1>{props.userId}</h1>
        <h1>{props.toggle}</h1>
        <h1>{props.user.email}</h1>
        <h1>{props.user.password}</h1>
    </div>
  )
}

User.propTypes = {
    userName : PropTypes.string,
    userId: PropTypes.number,
    toggle: PropTypes.bool,
    // user: PropTypes.object.isRequired
    user: PropTypes.shape({
        email: PropTypes.string,
        password: PropTypes.number
    })

}

User.defaultProps = {
    userName : "You have no Name",
    userId: 0,
    toggle: NaN,


}

export default User
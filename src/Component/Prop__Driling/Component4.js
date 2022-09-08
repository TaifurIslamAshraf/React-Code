import React, { useContext } from 'react'
import { UserContext } from './UserContext'

const Component4 = () => {

    const user = useContext(UserContext)

  return (
    <div>
        <h1>{user.id}</h1>
        <h1>{user.name}</h1>
    </div>
  )
}

export default Component4
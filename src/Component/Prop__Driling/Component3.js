import React, { useContext } from 'react'
import Component4 from './Component4'
import { UserContext } from './UserContext'

const Component3 = () => {

    const user = useContext(UserContext)

  return (
    <div>
        <h1>{user.id}</h1>
        <h1>{user.name}</h1>
        <Component4  />
    </div>
  )
}

export default Component3
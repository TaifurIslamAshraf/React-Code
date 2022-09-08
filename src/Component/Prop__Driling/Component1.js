import React from 'react'
import Component2 from './Component2'

import { UserContext } from './UserContext'

const Component1 = () => {
    const user = {
        id: 101,
        name: "Taifur Islam"
    }

  return (
    <UserContext.Provider value={user}>
        <Component2 />
    </UserContext.Provider>
  )
}

export default Component1
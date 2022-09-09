import React, { useState } from 'react'
import User from './User'

const Users = () => {
    
    const [userName, setUserName] = useState("Taifur islam")
    const [userId, setUserId] = useState(101)
    const [toggle, setToggle] = useState(false)
    const [user, setUser] = useState({
        email: "TaifurislamAshraf@gamil.com",
        password: 123
    })

  return (
    <div>
        <User userName={userName} userId={userId} toggle={toggle} user={user} />
    </div>
  )
}

export default Users
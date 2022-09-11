import React from 'react'

import { useNavigate } from 'react-router-dom'

const Contact = () => {
  const navigate = useNavigate()
  return (
    <div>
         <h1>Contact Page</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, beatae assumenda? Dolore pariatur, nihil mollitia laudantium suscipit quibusdam at vero incidunt. Veniam, ab! Dicta ab, dolorem iste, omnis nostrum a eligendi voluptas, nisi fugiat impedit quod necessitatibus voluptate recusandae reiciendis?</p>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In quibusdam vel odit accusantium nemo veritatis soluta qui consequuntur ipsa aliquid.</p>
        <button onClick={()=>{navigate("/")}}>Go To Homepage</button>
    </div>
  )
}

export default Contact
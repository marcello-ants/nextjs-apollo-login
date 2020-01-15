import React, { useState } from 'react'

export default () => {
  const [userData, setUserData] = useState({ email: '', password: '' })
  
  return (
    <div>
      <form>
        <div>
          <div>e-mail:</div>
          <input
            type="text"
            id="email"
            name="email"
            value={userData.email}
            onChange={event =>
              setUserData(
                Object.assign({}, userData, { email: event.target.value })
              )
            }
          />
        </div>
        <div>
          <div>password:</div>
          <input
            type="text"
            id="password"
            name="password"
            value={userData.password}
            onChange={event =>
              setUserData(
                Object.assign({}, userData, { password: event.target.value })
              )
            }
          />
        </div>
      </form>
    </div>
  )
}

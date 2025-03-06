import React from 'react'

const login = () => {
  return (
    <div>
        <div>
            <form action="">
                <div>
                    <label htmlFor="name">User Name:</label>
                    <input type="name" name="name" id="name" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    </div>
  )
}

export default login
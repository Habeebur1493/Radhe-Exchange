import React from 'react'

const login = () => {
  return (
    <div>
        <div>
            <form action="">
                <div>
                    <label htmlFor="name">User Name:</label>
                    <input type="name" name="name" id="name" placeholder='Enter User Name' />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" placeholder='Enter Password' />
                </div>
                <div>

                    <input type="captcha" name="captcha" id="captcha" placeholder='Solve Captcha' />
                    <i class="ri-loop-right-line"></i>
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    </div>
  )
}

export default login
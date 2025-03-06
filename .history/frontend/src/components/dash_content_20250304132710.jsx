import React from 'react'

const dash_content = () => {
  return (
    <div>
        <div>
            <label htmlFor="">Dashboard:</label>
            <div className='h-[5%] w-[95%] flex flex-row justify-start'>
                <div>
                    <label htmlFor="">From Date:</label>
                    <input type="date" placeholder='' />
                </div>
                <div>
                    <label htmlFor="">To Date:</label>
                    <input type="date" placeholder='' />
                </div>
                <div>
                    <button>Submit</button>
                    <button>Reset</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default dash_content
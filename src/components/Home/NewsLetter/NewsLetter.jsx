import React from 'react'

const NewsLetter = () => {
    return (
        <div>
            <div className="NewsLetter top flex justify-around items-center my-20">
                <div className="text">
                    <h1 className='text-3xl font-bold my-3'>Join Us & Get Updates</h1>
                    <p>sign up for exclusive offers, lattest news and updates</p>
                </div>
                <div className="subscribe flex justify-center items-center gap-2">
                    <input type="email" placeholder='Enter email address' className='text-lg border-[2px] p-2 rounded-full' />
                    <button type='submit' className='bg-blue-600 text-white p-2 text-lg rounded-full'>Subscribe</button>
                </div>
            </div>
            <div className="h-[1px] bg-gray-300 ">

            </div>
        </div>
    )
}

export default NewsLetter

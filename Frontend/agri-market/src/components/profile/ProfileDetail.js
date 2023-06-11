import React from 'react'

const ProfileDetail = ({ title, info, isAddress }) => {
    return (
        <div>
            <div className='flex bg-white p-3 px-5 rounded-xl space-x-5' >
                <div className='flex w-44 justify-between pr-3' >
                    <span className='font-bold ' >{title} </span>
                    <p>:</p>
                </div>
                {isAddress ? (
                    <textarea disabled={true} value={info} className='font-semibold w-80 ' />
                ) : (
                    <p className='font-semibold' >{info} </p>
                )}
            </div>
        </div>
    )
}

export default ProfileDetail
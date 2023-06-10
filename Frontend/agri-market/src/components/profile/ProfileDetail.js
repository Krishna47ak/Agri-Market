import React from 'react'

const ProfileDetail = ({ title, info, isAddress }) => {
    return (
        <div>
            <div className='flex bg-white p-3 px-5 rounded-xl justify-between' >
                <span className='font-bold mr-3' >{title} :</span>
                {isAddress ? (
                    <textarea disabled={true} value={info} className='font-semibold w-96 ' />
                ) : (
                    <p className='font-semibold' >{info} </p>
                )}
            </div>
        </div>
    )
}

export default ProfileDetail
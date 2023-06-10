import React from 'react'

const ProfileDetail = ({ title, info, style }) => {
    return (
        <div>
            <div className={`flex bg-white p-3 px-5 rounded-xl justify-between ${style}`} >
                <span className='font-bold mr-3' >{title} :</span>
                <p className='font-semibold' >{info} </p>
            </div>
        </div>
    )
}

export default ProfileDetail
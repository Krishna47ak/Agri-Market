import React from 'react'

const ProfileInputEdit = ({ title, value, name, type, onChange, address }) => {
    return (
        <div className='flex p-3 px-5 rounded-xl items-center' >
            <p className='font-bold mr-5 w-40' >{title} :</p>
            {address ? (
                <textarea value={value || ''} onChange={onChange} className="p-2 w-96 text-center border border-gray-300" type={type} name={name} />
            ) : (
                <input value={value || ''} onChange={onChange} className="p-2 w-96 text-center border border-gray-300" type={type} name={name} />
            )}
        </div>
    )
}

export default ProfileInputEdit
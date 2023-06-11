import { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ProfileInputEdit from '../components/profile/ProfileInputEdit'

import { Context as AuthContext } from '../context/AuthContext'
import { Context as AlertContext } from '../context/AlertContext'

const ProfileEdit = () => {
    const { state: { user, loading }, editProfile } = useContext(AuthContext)
    const { setAlert } = useContext(AlertContext)

    const history = useNavigate()

    const [name, setName] = useState(user?.name)
    const [email, setEmail] = useState(user?.email)
    const [mobile, setMobile] = useState(user?.mobile)
    const [pincode, setPincode] = useState(user?.pincode)
    const [address, setAddress] = useState(user?.address)

    useEffect(() => {
        setName(user?.name)
        setEmail(user?.email)
        setMobile(user?.mobile)
        setPincode(user?.pincode)
        setAddress(user?.address)
    }, [user])

    const onSubmit = e => {
        e.preventDefault()
        editProfile(name, email, mobile, pincode, address, history);
        setAlert('Profile Edited', 'bg-green-500')
    }

    return (
        <div className='flex items-center flex-col p-14' >
            <p className='text-3xl font-bold' >Edit Your Profile</p>
            <div>
                <div>
                    <form action="" className=" flex flex-col mt-10">
                        <ProfileInputEdit onChange={e => setName(e.target.value)} title={'Name'} value={name} type={'text'} name={'name'} />
                        <ProfileInputEdit disabled={true} onChange={e => setEmail(e.target.value)} title={'Email'} value={email} type={'email'} name={'email'} />
                        <ProfileInputEdit onChange={e => setMobile(e.target.value)} title={'Mobile Number'} value={mobile} type={'tel'} name={'mobile'} />
                        <ProfileInputEdit onChange={e => setPincode(e.target.value)} title={'Pincode'} value={pincode} type={'number'} name={'pincode'} />
                        <ProfileInputEdit isAddress={true} onChange={e => setAddress(e.target.value)} title={'Address'} value={address} type={'text'} name={'address'} />
                        <button onClick={onSubmit} className="bg-green-800 self-end mr-5 mt-5 rounded-lg text-white p-2 px-5 hover:scale-105 duration-300">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ProfileEdit
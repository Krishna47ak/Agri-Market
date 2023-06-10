import { useState, useContext, useEffect } from 'react'
import { Context as AuthContext } from '../context/AuthContext'
import ProfileInputEdit from '../components/profile/ProfileInputEdit'


const ProfileEdit = () => {
    const { state: { user, isAuthenticated, loading }, fetchUser } = useContext(AuthContext)

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
        console.log(name, email, mobile, pincode, address);
    }

    return (
        <div className='flex items-center flex-col p-14' >
            <p>Edit Profile</p>
            <div>
                <div>
                    <form action="" className=" flex flex-col mt-10">
                        <ProfileInputEdit onChange={e => setName(e.target.value)} title={'Name'} value={name} type={'text'} name={'name'} />
                        <ProfileInputEdit onChange={e => setEmail(e.target.value)} title={'Email'} value={email} type={'email'} name={'email'} />
                        <ProfileInputEdit onChange={e => setMobile(e.target.value)} title={'Mobile Number'} value={mobile} type={'tel'} name={'mobile'} />
                        <ProfileInputEdit onChange={e => setPincode(e.target.value)} title={'Pincode'} value={pincode} type={'number'} name={'pincode'} />
                        <ProfileInputEdit address={true} onChange={e => setAddress(e.target.value)} title={'Address'} value={address} type={'text'} name={'address'} />
                        <button onClick={onSubmit} className="bg-green-800 self-end mr-5 mt-5 rounded-xl text-white p-2 hover:scale-105 duration-300">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ProfileEdit
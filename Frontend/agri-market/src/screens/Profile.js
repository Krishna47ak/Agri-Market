import { useContext, useEffect } from 'react'
import { Context as AuthContext } from '../context/AuthContext'

const Profile = () => {
  const { state: { user, isAuthenticated, loading }, fetchUser } = useContext(AuthContext)

  useEffect(() => {
    fetchUser()
  }, [])


  return (
    <div className=' text-black p-14  flex flex-col items-center ' >
      <div className='bg-gray-400 p-5 rounded-xl ' >
        <p className='text-3xl font-Poppins font-bold' >My Profile</p>

        <div className='text-xl space-y-5 mt-14 mb-7 w-[35rem]'  >
          <div className='flex bg-white p-3 px-5 rounded-xl justify-between' ><span className='font-bold mr-3' >Name :</span> <p className='font-semibold' >{user?.name} </p></div>
          <div className='flex bg-white p-3 px-5 rounded-xl justify-between' ><span className='font-bold mr-3' >Email :</span> <p className='font-semibold' >{user?.email} </p></div>
          <div className='flex bg-white p-3 px-5 rounded-xl justify-between' ><span className='font-bold mr-3' >Mobile Number :</span> <p className='font-semibold' >{user?.mobile} </p></div>
          <div className='flex bg-white p-3 px-5 rounded-xl justify-between' ><span className='font-bold mr-3' >Pincode :</span>  <p className='font-semibold' >{user?.pincode} </p></div>
          <div className='flex bg-white p-3 px-5 rounded-xl justify-between  h-20 ' ><span className='font-bold mr-3' >Address :</span> <p className='font-semibold' >{user?.address} </p></div>
        </div>
      </div>
    </div>
  )
}

export default Profile
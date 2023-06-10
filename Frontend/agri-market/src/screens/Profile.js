import { useContext, useEffect } from 'react'
import { Context as AuthContext } from '../context/AuthContext'
import { Link, Navigate } from 'react-router-dom'
import EditIcon from '../assets/svg/EditSVG'
import ProfileDetail from '../components/profile/ProfileDetail'

const Profile = () => {
  const { state: { user, isAuthenticated, loading }, fetchUser } = useContext(AuthContext)
  
  useEffect(() => {
    fetchUser()
  }, [])

  if (!isAuthenticated) {
    return <Navigate to="/login" />
  }


  return (
    <div className='p-14  flex flex-col items-center ' >
      <div className='bg-gray-400 p-5 rounded-xl ' >
        <div className='flex justify-between' >
          <p className='text-black text-3xl font-Poppins font-bold' >My Profile</p>
          <Link to='/profile-edit' className='bg-gray-300  flex items-center p-3 rounded-full ' >
            <EditIcon />
          </Link>
        </div>

        <div className='text-xl space-y-5 mt-14 mb-7 w-[35rem]'  >
          <ProfileDetail title={'Name'} info={user?.name} />
          <ProfileDetail title={'Email'} info={user?.email} />
          <ProfileDetail title={'Mobile Number'} info={user?.mobile} />
          <ProfileDetail title={'Pincode'} info={user?.pincode} />
          <ProfileDetail title={'Address'} info={user?.address} isAddress={true} />
        </div>
      </div>
    </div>
  )
}

export default Profile
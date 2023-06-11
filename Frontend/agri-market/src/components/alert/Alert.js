import { useContext } from 'react'
import { Context as AlertContext } from '../../context/AlertContext'

const Alert = () => {
    const { state } = useContext(AlertContext)

    return (
        state !== null && state.length > 0 && state.map(alert => (
            //Use fixed instead of sticky to avoid background space
            <div key={alert.id} className={`${alert.bgColor} bg-opacity-90 w-52 p-4 text-center rounded-lg fixed z-10 left-[43.8%] top-1/2 `} >
                <p className='text-white font-bold' >
                    {alert.msg}
                </p>
            </div>
        ))
    )
}

export default Alert
import React from 'react'

const PlantSpinner = () => {
  return (
    <div className='flex justify-center my-96' >
        <img src={require('../../assets/img/plant-spinner.gif')} alt='Loading' />
    </div>
  )
}

export default PlantSpinner
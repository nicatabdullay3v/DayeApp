import React from 'react'
import './cards.scss'

const Cards = () => {
  return (
    <div>
        <h3>Meet verified babysitters in your area</h3>
        <div className='cards'>
            <div className='card_image'></div>
            <h4>Name</h4>
            <h4>City</h4>
            <div className='raiting_stars'></div>
        </div>
    </div>
  )
}

export default Cards
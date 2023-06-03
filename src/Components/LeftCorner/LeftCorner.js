import './LeftCorner.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'

const blogButton = () => {
    alert('My blog is on its way!')
}


const LeftCorner = (props) => {
    return(
        <div className='left'>
            <h1 className='title'>{props.title}</h1>
            <h3 className='description'>{props.message}</h3>
            <button className='blog-button' onClick={blogButton}>See My Blog
            </button>
         </div>
    )
}

export default LeftCorner;
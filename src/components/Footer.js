import React from 'react'

function Footer(props) {
    return (
        <div className='row fixed-bottom'>
            <button className='btn btn-danger col-2' onClick={() =>{props.resetQuantity()}}>Reset</button>
            <div className='col-8 bg-secondary text-white text-center'>{props.totalAmount}</div>
            <button className='btn btn-primary col-2'>Pay Now</button>
        </div>
    )
}

export default Footer

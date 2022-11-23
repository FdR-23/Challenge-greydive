import React from 'react'
import Logo from '../img/logo.png'



const Navbar = () => {
    return (
        <div className='py-8 '>
            <img
                className='w-52'
                src={Logo} alt="Logo" />
        </div>
    )

}

export default Navbar
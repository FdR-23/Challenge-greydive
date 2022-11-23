import React from 'react'

import data from '../data/db.json'
import { Link } from 'react-router-dom'
import viamo from '../img/viamo.png'
import nebula from '../img/nebula.png'

const Home = () => {

    if (!data) {
        return (<p>Cargando....</p>)
    }
    return (
        <div className='flex flex-col  '>

            <h2 className='text-3xl uppercase font-bold '
            >Bienvenido</h2>

            <div className='flex flex-row mt-12 justify-evenly '  >
                {data.map((element) =>
                    <div className='p-2 flex flex-col items-center'
                        key={element.idVideo}>
                        <p className='text-2xl font-semibold p-2 uppercase'>Test</p>
                        <div className=' border-2 border-indigo-500 rounded-xl m-2 overflow-hidden'>
                            {element.cliente === 'viamo' ?
                                <img src={viamo} alt='img_viamo' /> :
                                <img src={nebula} alt='img_nebula' />}
                        </div>
                        <Link to={element.cliente}>
                            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'>
                                {element.cliente}</button>
                        </Link>
                    </div>
                )}
            </div>


        </div>
    )
}

export default Home
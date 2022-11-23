import React from 'react'
import { Link, useParams } from 'react-router-dom'

import data from '../data/db.json'
import Error from './Error.jsx'
import Taks from './Taks.jsx'

const Clients = () => {
    const { id } = useParams()
    const foundClient = data.find((element) => element.cliente === id)



    if (!foundClient) {
        return (<Error />)
    } else {
        return (
            <div className='flex flex-col'>
                <div>
                    <h3 className='text-4xl font-bold uppercase py-2'
                    >{foundClient.cliente}</h3>
                    <h3 className='text-3xl  font-semibold py-2'
                    >Test: Test de usabilidad en el sitio web</h3>


                    <section className='py-2'>
                        <video src={foundClient.linkVideo} controls></video>
                    </section>

                    <section>
                        <h3 className='text-3xl  font-semibold py-8'
                        >Transcripción</h3>
                        <p className='h-96 w-4/6 px-8 overflow-scroll text-lg font-medium'
                            dangerouslySetInnerHTML={{ __html: foundClient.transcripcion }}></p>
                    </section>

                    <section className='w-6/12 '>
                        <h3 className='text-3xl  font-semibold py-8'
                        >Tareas</h3>
                        <p className='text-lg  font-semibold '
                        >Escenario: {foundClient.escenario}</p>
                        {foundClient.preguntas && foundClient.preguntas.map((element, index) =>
                            <Taks
                                key={index}
                                id={++index}
                                text={element.texto}
                                timeTask={element.tiempo}
                                response={element.respuesta}
                            />
                        )}
                    </section>

                </div>

                <div className='flex flex-col justify-center items-center p-4' >
                    <Link to='/'>
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'>Back Home</button>
                    </Link>
                </div>
            </div >
        )
    }
}

export default Clients
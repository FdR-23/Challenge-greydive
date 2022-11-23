import React from 'react'

const Taks = ({ id, text, timeTask, response }) => {

    return (
        <div className='py-4 border-b-2'>
            <p className='text-lg font-bold'
            >Tarea {id}:</p>
            <p className='text-lg font-bold'
                dangerouslySetInnerHTML={{ __html: text.replace('\\n', '<br>') }}></p>
            {response !== "respuesta verbal" &&
                <p className='text-lg font-semibold py-4'
                >Respuesta: {response}</p>}
            <p className='text-lg font-normal py-4 text-orange-400'
            >Duración de la tarea: {timeTask}</p>
        </div>
    )
}
export default Taks
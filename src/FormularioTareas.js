import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';

const FormularioTareas = ({tareas, setTareas}) => {

    const [inputTarea, setInputTarea] = useState("")

    const cambiarInputTarea = (e) => {
        setInputTarea(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
                
        setTareas(
            [...tareas,
                {
                    id: uuidv4(),
                    tarea: inputTarea,
                    completada: false
                }
            ]
        );
        setInputTarea("")
    }

    return (
        <div>
            <form action="" className='formulario-tareas' onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    className='formulario-tareas__input' 
                    placeholder='Escribe una tarea'
                    value={inputTarea}
                    onChange={(e) => cambiarInputTarea(e)}
                />
                <button
                    className='formulario-tareas__btn' 
                    type='submit'
                >
                <FontAwesomeIcon 
                    icon={faPlusSquare} 
                    className='formulario-tareas__icono-btn' 
                />
                </button>
            </form>
        </div>
    );
}
 
export default FormularioTareas;
import React, {useState} from 'react';

const InputActualizarTarea = ({tarea, setInputEditarTarea, editarTarea}) => {

const [nuevaTarea, setNuevaTarea] = useState(tarea.tarea);

    const handleSubmit = (e) => {
        e.preventDefault()
        editarTarea(tarea.id, nuevaTarea)
        setInputEditarTarea(false)
    }

    return ( 
        <form action="" className='formulario-editar-tarea' onSubmit={handleSubmit}>
        <input 
        type="text" 
        className='formulario-editar-tarea__input'
        value={nuevaTarea}
        onChange={(e) => {setNuevaTarea(e.target.value)}}
        />
        <button 
            className='formulario-editar-tarea__btn'
            type='submit'
        >
            Actualizar
        </button>
    </form>    
    );
}
 
export default InputActualizarTarea;
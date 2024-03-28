import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faEdit, faSquare, faTimes } from '@fortawesome/free-solid-svg-icons';
import InputActualizarTarea from './InputActualizarTarea';

const Tarea = ({tarea, toggleCompletada, editarTarea, borrarTarea}) => {

    const [inputEditarTarea, setInputEditarTarea] = useState(false);

    return ( 
        <li className='lista-tareas__tarea'>
            <FontAwesomeIcon 
                icon={tarea.completada ? faCheckSquare : faSquare} 
                className='lista-tareas__icono lista-tareas__icono-check'
                onClick={() => toggleCompletada(tarea.id)}
            />

            <div className='lista-tareas__texto'>
                {   inputEditarTarea ?
                    <InputActualizarTarea tarea={tarea} setInputEditarTarea={setInputEditarTarea} editarTarea={editarTarea}/>
                    : tarea.tarea
                }
            </div>

            <div className='lista-tareas__contenedor-botones'>
            <FontAwesomeIcon 
                icon={faEdit} 
                className='lista-tareas__icono lista-tareas__icono-accion'
                onClick={() => setInputEditarTarea(!inputEditarTarea)}
            />
             <FontAwesomeIcon 
                icon={faTimes} 
                className='lista-tareas__icono lista-tareas__icono-accion'
                onClick={() => borrarTarea(tarea.id)}
            />
            </div>
        </li>
        
    );
}
 
export default Tarea;
import React from 'react';
import Tarea from './Tarea';

const ListaTareas = ({tareas, setTareas, mostrarCompletadas}) => {

    const toggleCompletada = (id) => {
        setTareas(tareas.map((tarea) => {
            if (tarea.id === id) {
                return {...tarea, completada: !tarea.completada}
            }
            else {
                return tarea
            }
        }))
    }

    const editarTarea = (id, nuevoTexto) => {
        setTareas(tareas.map((tarea) => {
            if (tarea.id === id) {
                return {...tarea, tarea: nuevoTexto}
            }
            else {
                return tarea;
            }
        }))
    }

    const borrarTarea = (id) => {
        setTareas(tareas.filter((tarea) => {
            if (tarea.id !== id) {
                return tarea;
            }
            else {
                return;
            }
        }))
    }

    return ( 
        <ul className='lista-tareas'>
            {tareas.length > 0 ? tareas.map((tarea) => {

                if (mostrarCompletadas) {
                    return <Tarea 
                                key={tarea.id} 
                                tarea={tarea}
                                toggleCompletada={toggleCompletada}
                                editarTarea={editarTarea}
                                borrarTarea={borrarTarea}
                            />
                // Si la tarea no esta completada, la devolvemos
                } else if (!tarea.completada) {
                    return <Tarea 
                                key={tarea.id} 
                                tarea={tarea}
                                toggleCompletada={toggleCompletada}
                                editarTarea={editarTarea}
                                borrarTarea={borrarTarea}
                            />
                }
                // Si ya esta completada no la devolvemos
                return;
            })
            : <div className='lista-tareas__mensaje'> No hay tareas agregadas</div>
            }
        </ul>
    );
}
 
export default ListaTareas;
import React, { useEffect, useState } from 'react';
import Header from "./Header"
import './App.css';
import FormularioTareas from "./FormularioTareas";
import ListaTareas from './ListaTareas';

const App = () => {

  // Paso 2: Obtenemos las tareas del LS
  const tareasEnLS = localStorage.getItem("tareas")
  // Paso 3: Convertimos las tareas de un string a un arreglo
  const tareasGuardadas = JSON.parse(tareasEnLS);

  const [tareas, setTareas] = useState(tareasGuardadas);

  useEffect(() => {
    // Paso 1: Guardamos las tareas en LS en un string
    localStorage.setItem("tareas", JSON.stringify(tareas));
  },[tareas])

  let configMostrarCompletada = "";
  if (localStorage.getItem("mostrarCompletadas") === null) {
    configMostrarCompletada = true
  } else {
    configMostrarCompletada = localStorage.getItem("mostrarCompletadas") === "true"
  }

  const [mostrarCompletadas, setMostrarCompletadas] = useState(configMostrarCompletada);

  useEffect(() => {
    localStorage.setItem("mostrarCompletadas", mostrarCompletadas.toString())
  },[mostrarCompletadas])

  return (
    <div className='contenedor'>
      <Header mostrarCompletadas={mostrarCompletadas} setMostrarCompletadas={setMostrarCompletadas}/>
      <FormularioTareas tareas={tareas} setTareas={setTareas}/>
      <ListaTareas tareas={tareas} setTareas={setTareas} mostrarCompletadas={mostrarCompletadas}/>  
    </div>
  );
}

export default App;

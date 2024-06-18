import React, { useEffect, useState } from 'react'
import service from '../services/peliculas.service'
import Tabla from './Tabla'
import Registro from './Registro'
import Filtro from './Filtro'

export default function Peliculas(){

    const [rows, setRows] = useState([])
    const [action, setAction] = useState('C')
    const [item, setItem] = useState({})

    
    const loadGrid = async(filter) =>{
        const data = await service.getByFilters(filter)
        setRows(data)
    }

    const onConsultar = async (filter) => {
        loadGrid(filter)
    }

    const onGuardar = async (data) => {
        const result = await service.save(data)
        if(result){
            loadGrid()
            setAction('C')
        }
    }

    const onNewClick = () => {
        setAction('N')
    }

    const onEliminar = async (id) => {
            await service.remove(id)
            loadGrid()
    }

    const onActualizar = async(item)=>{
        setItem(item)
        setAction('A')
    }

    const onCancelar = () => {
        setAction('C')
    }

    useEffect(() => {
        loadGrid()
    }, [])

    return (
        <>
            {
                action === 'C' && (
                    <>
                         <Filtro onConsultar={onConsultar}></Filtro>
                         <Tabla rows={rows} onNewClick={onNewClick}  onEliminar={onEliminar} onActualizar={onActualizar}></Tabla>
                    </>
                ) 
            }
            {
                action !== 'C' && (
                    <>
                        <Registro onGuardar={onGuardar} onCancelar={onCancelar} item = {item} ></Registro>
                    </>
                )
            }
        </>
    )
}
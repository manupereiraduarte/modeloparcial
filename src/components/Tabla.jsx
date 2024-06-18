import React from "react";

export default function Tabla(props){

    const onEliminar = (id)=>{
        if(window.confirm('Seguro que desea eliminar?'))
            props.onEliminar(id)
    }

    const onActualizar = (item)=>{
           props.onActualizar(item)
    }
    const tbody = props.rows.map(e => 
        <tr key={e.Id}>
            <td>{e.Titulo}</td>
            <td>{e.Director}</td>
            <td>{e.Genero}</td>
            <td>{e.Duracion}</td>
            <td>
                 {
                     (<button disabled={e.Eliminado === true} className="btn btn-sm btn-danger" onClick={()=>{onEliminar(e.Id)}}>Eliminar</button>)   
                 }  

            </td>

            <td>
                 {
                     (<button disabled={e.Eliminado === true} className="btn btn-sm btn-secondary" onClick={()=>{onActualizar(e)}}>Actualizar</button>)   
                 }  

            </td>
        </tr>
    )

    return (
        <>
            <div className="card">
                <div className="card-header d-flex justify-content-between aling-items-center">
                    <span>Resultados:</span>
                    <button type="button" onClick={props.onNewClick} className="btn btn-primary">
                         Nueva
                    </button>
                </div>
                <div className="card-body">
                    <table className="table">
                        <thead>
                            <th>Titulo</th>
                            <th>Director</th>
                            <th>Género</th>
                            <th>Duración</th>
                            <th>Acciones</th>
                        </thead>
                        <tbody>{tbody}</tbody>
                    </table>
                </div>

            </div>
        </>
    )
}
import React from "react";
import {useForm} from 'react-hook-form'

export default function Registro({onGuardar, onCancelar, item}){

    const {register, handleSubmit, formState: {errors}} = useForm({values: item})

    const onSubmit = (data) => {
        onGuardar(data)
    }

    return(
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h5>{item.Id !==undefined?'Actualizar pelicula': 'Nueva pelicula'}</h5>
                <div className="form-group">
                    <label htmlFor="Titulo">Titulo</label>
                    <input type="text" className="form-control" id="titulo" placeholder="Ingres titulo..."
                    {...register('Titulo', {required: 'Campo obligatorio'})} />
                    {errors.Titulo && <span className="text-danger">{errors.Titulo.message}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="Director">Director</label>
                    <input type="text" className="form-control" id="Director" placeholder="Ingrese director"
                    {...register('Director', {required: 'Campo obligatorio'})} />

                    {errors.Director && <span className="text-danger">{errors.Director.message}</span>}     
                </div>
                <div className="form-group">
                    <label htmlFor="Genero">Genero</label>
                    <select name="" id="Genero"  className="form-control" {...register('Genero', {required: 'Campo obligatorio'})}>
                       {/* {
                            generos.map(e=>{
                                <option value={e.id}>{e.nombre}</option>
                            })
                        }*/}
                        <option value={'Accion'}>Accion</option>
                        <option value={'Drama'}>Drama</option>
                        <option value={'Fantasia'}>Fantasia</option>
                        <option value={'Crimen'}>Crimen</option>
                    </select>
                    {errors.Genero && <span className="text-danger">{errors.Genero.message}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="Duracion">Duracion</label>
                    <input type="text" className="form-control" id="Duracion" placeholder="Ingrese duración"
                    {...register('Duracion', {required: 'Campo obligatorio'})} />

                    {errors.Duracion && <span className="text-danger">{errors.Duracion.message}</span>}     
                </div>
                <div className="form-group mt-3">
                    <button type="submit" className="btn btn-primary mx-1">Guardar</button>
                    <button type="button" onClick={onCancelar}  className="btn btn-secondary mx-1"> Cancelar</button>
                </div>
            </form>
        </>
    )
}
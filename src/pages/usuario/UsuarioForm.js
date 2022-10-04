import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import * as UsuarioServer from './../../services/usuario';
const UsuarioForm = () => {
    const navigate = useNavigate();
    const params = useParams();

    // console.log(params);

    const initialState = {
        idUsuario: 0,
        primerNombre: "",
        segundoNombre: "",
        apellidoPaterno: "",
        apellidoMaterno: "",
        telefono: "",
        correo: "",
        contraseña: "",
        idRol: 0
    };

    const [usuario, setUsuario] = useState(initialState);

    const handleInputChange = (e) => {
        // console.log(e.target.name);
        // console.log(e.target.value);
        setUsuario({ ...usuario, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res;
            if (!params.id) {
                res = await UsuarioServer.insertUsuario(usuario);
                const data = await res.json();
                if (data.message === "Success") {
                    setUsuario(initialState);
                }
            } else {
                await UsuarioServer.updateUsuario(params.id, usuario);
            }
            navigate('/usuarios');
        } catch (error) {
            console.log(error);
        }
    };

    const getUsuario = async (idUsuario) => {
        try {
            const res = await UsuarioServer.getUsuario(idUsuario);
            const data = await res.json();
            //console.log(data);

            
            const { primerNombre, segundoNombre, apellidoPaterno, apellidoMaterno, telefono, correo, contraseña, idRol 
            } = data.usuario;

            this.setUsuario({
                primerNombre,
                segundoNombre,
                apellidoPaterno,
                apellidoMaterno,
                telefono,
                correo,
                contraseña,
                idRol
            });
            
           
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (params.id) {
            getUsuario(params.id);
        }
        // eslint-disable-next-line
    }, []);

    return (
        <div className='container'>
            <h3>Edit POST</h3>
            <form onSubmit={handleSubmit}>

                <div className='mb-3'>
                    <label className='form-label'>Primer Nombre</label>
                    <input
                        name='primerNombre'
                        value={usuario.primerNombre}
                        onChange={handleInputChange}
                        type="text"
                        className='form-control'
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Segundo Nombre</label>
                    <input
                        name="segundoNombre"
                        value={usuario.segundoNombre}
                        onChange={handleInputChange}
                        type="text"
                        className='form-control'
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Apellido Paterno</label>
                    <input
                        name="apellidoPaterno"
                        value={usuario.apellidoPaterno}
                        onChange={handleInputChange}
                        type="text"
                        className='form-control'
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Apellido Materno</label>
                    <input
                        name="apellidoMaterno"
                        value={usuario.apellidoMaterno}
                        onChange={handleInputChange}
                        type="text"
                        className='form-control'
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Correo</label>
                    <input
                        name="correo"
                        value={usuario.correo}
                        onChange={handleInputChange}
                        type="text"
                        className='form-control'
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Telefono</label>
                    <input
                        name="telefono"
                        value={usuario.telefono}
                        onChange={handleInputChange}
                        type="text"
                        className='form-control'
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Contraseña</label>
                    <input
                        name="contraseña"
                        value={usuario.contraseña}
                        onChange={handleInputChange}
                        type="text"
                        className='form-control'
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Rol</label>
                    <input
                        name="idRol"
                        value={usuario.idRol}
                        onChange={handleInputChange}
                        type="number"
                        className='form-control'
                    />
                </div>

                <div className="d-grid gap-2">
                    {params.id ? (
                        <button type="submit" className="btn btn-block btn-primary">
                            Update
                        </button>
                    ) : (
                        <button type="submit" className="btn btn-block btn-success">
                            Register
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default UsuarioForm;

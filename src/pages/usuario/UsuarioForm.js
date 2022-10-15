import React, { useState } from "react";
import UsuarioService from './../../services/usuario';
import { useNavigate } from 'react-router-dom';

const UsuarioForm = () => {
    const initialTutorialState = {
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
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState(initialTutorialState);
    //const [submitted, setSubmitted] = useState(false);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setUsuario({ ...usuario, [name]: value });
    };

    const agregarUsuario = () => {
        var data = {
            primerNombre: usuario.primerNombre,
            segundoNombre: usuario.segundoNombre,
            apellidoPaterno: usuario.apellidoPaterno,
            apellidoMaterno: usuario.apellidoMaterno,
            correo: usuario.correo,
            telefono: usuario.telefono,
            contraseña: usuario.contraseña,
            idRol: usuario.idRol,
        };

        UsuarioService.create(data)
            .then(response => {
                setUsuario({
                    //id: response.data.id,
                    primerNombre: response.data.primerNombre,
                    segundoNombre: response.data.segundoNombre,
                    apellidoPaterno: response.data.apellidoPaterno,
                    apellidoMaterno: response.data.apellidoMaterno,
                    telefono: response.data.telefono,
                    correo: response.data.correo,
                    contraseña: response.data.contraseña,
                    idRol: response.data.idRol
                });
                console.log(response.data);
                navigate('/usuario');
            })
            .catch(e => {
                console.log(e);
            });
    };


    return (
        <div className="submit-form">

            <div>
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

                <button onClick={agregarUsuario} className="btn btn-success">
                    Submit
                </button>
            </div>

        </div>
    );
};

export default UsuarioForm;
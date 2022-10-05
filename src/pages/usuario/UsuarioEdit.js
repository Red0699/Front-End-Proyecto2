import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UsuarioService from './../../services/usuario';

const API_URL = 'http://localhost:5000/api/usuarios/'

const UsuarioEdit = () => {
    const [primerNombre, setPN] = useState('')
    const [segundoNombre, setSN] = useState('')
    const [apellidoPaterno, setAP] = useState('')
    const [apellidoMaterno, setAM] = useState('')
    const [telefono, setTelefono] = useState('')
    const [correo, setCorreo] = useState('')
    const [contraseña, setContraseña] = useState('')
    const [idRol, setIR] = useState('')
    const { id } = useParams()
    const params = useParams();
    const navigate = useNavigate()

    /*
    //procedimiento guardar
    const update = async (e) => {
        e.preventDefault()
        
        await axios.put(API_URL + id, {
            primerNombre: primerNombre,
            segundoNombre: segundoNombre,
            apellidoPaterno: apellidoPaterno,
            apellidoMaterno: apellidoMaterno,
            telefono: telefono,
            correo: correo,
            contraseña: contraseña,
            idRol: idRol
        })
        
        navigate('/usuarios')
    }
*/
    useEffect(() => {
        axios.get(API_URL, { idUsuario: params.idUsuario }).then(res => {
            console.log(res.data[0]);
            const dataUsuario = res.data[0];
            setPN(dataUsuario.primerNombre)
            setSN(dataUsuario.segundoNombre)
            setAP(dataUsuario.apellidoPaterno)
            setAM(dataUsuario.apellidoMaterno)
            setTelefono(dataUsuario.telefono)
            setCorreo(dataUsuario.correo)
            setContraseña(dataUsuario.contraseña)
            setIR(dataUsuario.idRol)
        })
    }, [])

    const actualizarUsuario = async (e) => {

        //const idUsuario = parseInt(params.id);

        e.preventDefault();

        const update = {
            primerNombre: primerNombre,
            segundoNombre: segundoNombre,
            apellidoPaterno: apellidoPaterno,
            apellidoMaterno: apellidoMaterno,
            telefono: telefono,
            correo: correo,
            contraseña: contraseña,
            idRol: idRol,
            //idUsuario: params.idUsuario
        }

        console.log(update);
        console.log(id);

        try {
            await UsuarioService.updateUsuario(id, update).then(res => {
                //alert(res.data);
                navigate('/usuarios')
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='container'>
            <h3>Edit POST</h3>
            <form onSubmit={actualizarUsuario}>

                <div className='mb-3'>
                    <label className='form-label'>Primer Nombre</label>
                    <input
                        value={primerNombre}
                        onChange={(e) => setPN(e.target.value)}
                        type="text"
                        className='form-control'
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Segundo Nombre</label>
                    <input
                        value={segundoNombre}
                        onChange={(e) => setSN(e.target.value)}
                        type="text"
                        className='form-control'
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Apellido Paterno</label>
                    <input
                        value={apellidoPaterno}
                        onChange={(e) => setAP(e.target.value)}
                        type="text"
                        className='form-control'
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Apellido Materno</label>
                    <input
                        value={apellidoMaterno}
                        onChange={(e) => setAM(e.target.value)}
                        type="text"
                        className='form-control'
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Correo</label>
                    <input
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                        type="text"
                        className='form-control'
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Telefono</label>
                    <input
                        value={telefono}
                        onChange={(e) => setTelefono(e.target.value)}
                        type="text"
                        className='form-control'
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Contraseña</label>
                    <input
                        value={contraseña}
                        onChange={(e) => setContraseña(e.target.value)}
                        type="text"
                        className='form-control'
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Rol</label>
                    <input
                        value={idRol}
                        onChange={(e) => setIR(e.target.value)}
                        type="text"
                        className='form-control'
                    />
                </div>

                <button type='submit' className='btn btn-primary'>Edit</button>
            </form>
        </div>
    )
}

export default UsuarioEdit
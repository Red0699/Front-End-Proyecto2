import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'

//React Icons
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai'
import UsuarioService from '../../services/usuario';

const API_URL = 'http://localhost:5000/api/usuarios/'

function UsuarioList() {

    const navigate = useNavigate();

    const [usuarios, setUsuario] = useState([])
    useEffect( ()=>{
        getUsuarios()
    },[])

    //procedimineto para mostrar todos los usuarios
    const getUsuarios = async () => {
        const res = await axios.get(API_URL)
        setUsuario(res.data)
    }

    //procedimineto para desabilitar un usuario
    const deshabilitarUsuario = async(id) => {
        await UsuarioService.deshabilitarUsuario(id);
        navigate("/usuarios");
    }
    

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to="/usuarios/create" className='btn btn-success mt-2 mb-2'><AiIcons.AiOutlineUserAdd/></Link>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Nombre 1</th>
                                <th>Nombre 2</th>
                                <th>Apellido 1</th>
                                <th>Apellido 2</th>
                                <th>Correo</th>
                                <th>Telefono</th>
                                <th>Rol</th>
                                <th>Accion</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usuarios.map((usuario) => (
                                <tr key={usuario.idUsuario}>
                                    <td> {usuario.primerNombre} </td>
                                    <td> {usuario.segundoNombre} </td>
                                    <td> {usuario.apellidoPaterno} </td>
                                    <td> {usuario.apellidoMaterno} </td>
                                    <td> {usuario.correo} </td>
                                    <td> {usuario.telefono} </td>
                                    <td> {usuario.idRol} </td>
                                    <td>
                                        <Link to={`/usuarios/edit/${usuario.idUsuario}`} className='btn btn-info'><FaIcons.FaUserEdit/></Link>
                                        <button onClick={() => deshabilitarUsuario(usuario.idUsuario)} className='btn btn-danger'><AiIcons.AiFillDelete/></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default UsuarioList
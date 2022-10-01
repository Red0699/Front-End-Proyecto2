import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const API_URL = 'http://localhost:5000/api/usuarios/'

function UsuarioList() {

    const [usuarios, setUsuario] = useState([])
    useEffect( ()=>{
        getUsuarios()
    },[])

    //procedimineto para mostrar todos los usuarios
    const getUsuarios = async () => {
        const res = await axios.get(API_URL)
        setUsuario(res.data)
    }

    //procedimineto para eliminar un 
    const deleteUsuario = async (id) => {
       await axios.delete(`${API_URL}${id}`)
       getUsuarios()
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to="/usuarios/create" className='btn btn-primary mt-2 mb-2'><i className="fas fa-plus"></i></Link>
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
                                        <Link to={`/usuarios/edit/${usuario.idUsuario}`} className='btn btn-info'><i className="fas fa-edit"></i></Link>
                                        <button onClick={() => deleteUsuario(usuario.id)} className='btn btn-danger'><i className="fas fa-trash-alt"></i></button>
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
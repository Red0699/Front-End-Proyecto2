import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const API_URL = 'http://localhost:5000/api/usuarios'

const UsuarioForm = () => {
    const [primerNombre, setPN] = useState('')
    const [segundoNombre, setSN] = useState('')
    const [apellidoPaterno, setAP] = useState('')
    const [apellidoMaterno, setAM] = useState('')
    const [telefono, setTelefono] = useState('')
    const [correo, setCorreo] = useState('')
    const [contraseña, setContraseña] = useState('')
    const [idRol, setIR] = useState('')
    const navigate = useNavigate()    
    
    //procedimiento guardar
    const store = async (e) => {
        e.preventDefault()
        await axios.post(API_URL, {
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

    return (
        <div className='container'>
           <h3>Create POST</h3>
           <form onSubmit={store}>
                
                <div className='mb-3'>
                    <label className='form-label'>Primer Nombre</label>
                    <input
                        value={primerNombre}
                        onChange={ (e)=> setPN(e.target.value)} 
                        type="text"
                        className='form-control'
                    />
                 </div>   

                 <div className='mb-3'>
                    <label className='form-label'>Segundo Nombre</label>
                    <input
                        value={segundoNombre}
                        onChange={ (e)=> setSN(e.target.value)} 
                        type="text"
                        className='form-control'
                    />
                 </div> 

                 <div className='mb-3'>
                    <label className='form-label'>Apellido Paterno</label>
                    <input
                        value={apellidoPaterno}
                        onChange={ (e)=> setAP(e.target.value)} 
                        type="text"
                        className='form-control'
                    />
                 </div>     
                 
                 <div className='mb-3'>
                    <label className='form-label'>Apellido Materno</label>
                    <input
                        value={apellidoMaterno}
                        onChange={ (e)=> setAM(e.target.value)} 
                        type="text"
                        className='form-control'
                    />
                 </div>  

                 <div className='mb-3'>
                    <label className='form-label'>Correo</label>
                    <input
                        value={correo}
                        onChange={ (e)=> setCorreo(e.target.value)} 
                        type="text"
                        className='form-control'
                    />
                 </div>  
                 
                 <div className='mb-3'>
                    <label className='form-label'>Telefono</label>
                    <input
                        value={telefono}
                        onChange={ (e)=> setTelefono(e.target.value)} 
                        type="text"
                        className='form-control'
                    />
                 </div> 

                  <div className='mb-3'>
                    <label className='form-label'>Contraseña</label>
                    <input
                        value={contraseña}
                        onChange={ (e)=> setContraseña(e.target.value)} 
                        type="text"
                        className='form-control'
                    />
                 </div>

                 <div className='mb-3'>
                    <label className='form-label'>Rol</label>
                    <input
                        value={idRol}
                        onChange={ (e)=> setIR(e.target.value)} 
                        type="text"
                        className='form-control'
                    />
                 </div>  

                 <button type='submit' className='btn btn-primary'>Store</button>                  
           </form>
        </div>
    )
}

export default UsuarioForm
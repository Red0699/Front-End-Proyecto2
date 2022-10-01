import { NavLink } from 'react-router-dom';
import './index.scss';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from "react-icons/io";

function Sidebar() {
    return (
        <div className='sidebar bg-light'>
            <ul>
                <li>
                    <NavLink to="/home"
                        exact className='text-dark rounded py-2 w-100 d-inline-block px-3'
                        activeClassName="active">
                        <FaIcons.FaHome className='me-2' />Inicio
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/usuarios"
                        exact className='text-dark rounded py-2 w-100 d-inline-block px-3'
                        activeClassName="active">
                        <FaIcons.FaUserAlt className='me-2' />Usuarios
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/proveedores"
                        exact className='text-dark rounded py-2 w-100 d-inline-block px-3'
                        activeClassName="active">
                        <IoIcons.IoIosPeople className='me-2' />Proveedor
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
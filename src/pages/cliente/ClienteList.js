import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import DataTable from 'react-data-table-component'

//Sweet Alert
import Swal from 'sweetalert2'

//ReactStrap
import { Card, CardBody, CardHeader, Button } from "reactstrap";

//Services
import ClienteService from '../../services/cliente'

const API_URL = 'http://localhost:5000/api/clientes/'

function ClienteList() {

    const navigate = useNavigate();

    const [clientes, setCliente] = useState([])
    useEffect(() => {
        getClientes()
    }, [])

    //procedimineto para mostrar todos los clientes
    const getClientes = async () => {
        const res = await axios.get(API_URL)
        setCliente(res.data)
    }

    //Columnas tabla
    const columns = [
        {
            name: 'Nombre',
            selector: row => row.nombre,
            sortable: true,
        },
        {
            name: 'Apellido',
            selector: row => row.apellido,
            sortable: true,
        },
        
        {
            name: 'Correo',
            selector: row => row.correo,
            sortable: true,
        },
        {
            name: 'Telefono',
            selector: row => row.telefono,
            sortable: true,
        },
        {
            name: '',
            cell: row => (
                <>
                    <Link to={`/cliente/edit/${row.idCliente}`} color="primary" size="sm" className="mr-2"
                    >
                        <i className="fas fa-pen-alt"></i>
                    </Link>

                    <Button color="danger" size="sm"
                        onClick={() => deshabilitarCliente(row.idCliente)}
                    >
                        <i className="fas fa-trash-alt"></i>
                    </Button>
                </>
            ),
        },
    ];

    const customStyles = {
        headCells: {
            style: {
                fontSize: '13px',
                fontWeight: 800,
            },
        },
        headRow: {
            style: {
                backgroundColor: "#eee",
            }
        }
    };

    const paginationComponentOptions = {
        rowsPerPageText: 'Filas por página',
        rangeSeparatorText: 'de',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Todos',
    };

    //procedimineto para desabilitar un usuario
    const deshabilitarCliente = async (id) => {

        Swal.fire({
            title: 'Esta seguro?',
            text: "Desea eliminar el proveedor",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, continuar',
            cancelButtonText: 'No, volver'
        }).then((result) => {
            if (result.isConfirmed) {
                ClienteService.deshabilitarCliente(id).then(response => {
                    getClientes();

                    Swal.fire(
                        'Eliminado!',
                        'El proveedor fue eliminado.',
                        'success'
                    )
                });
                //navigate("/clientes");
            }
        })
    }


    return (
        <>
            <Card>
                <CardHeader style={{ backgroundColor: '#4e73df', color: "white" }}>
                    Lista de clientes
                </CardHeader>
                <CardBody>
                    <Link to="/cliente/create" className='btn btn-success' size="sm">Nuevo Cliente</Link>
                    <hr></hr>
                    <DataTable
                        columns={columns}
                        data={clientes}
                        pagination
                        paginationComponentOptions={paginationComponentOptions}
                        customStyles={customStyles}
                    />
                </CardBody>
            </Card>
        </>
    )
}

export default ClienteList
import React, { useState } from "react";
import ProductoService from './../../services/producto';
import EntradaService from "../../services/entrada";
import { Link, useNavigate } from 'react-router-dom';

//ReactStrap
import {
    Container,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Card,
    CardBody,
    CardHeader,
    FormFeedback,
} from "reactstrap";


const EntradaForm = () => {
    const initialTutorialState = {
        idEntrada: 0,
        idProducto: 0,
        idProveedor: 0,
        
    };

    const initialProductoState = {
        precioCompra: 0,
        precioVenta: 0,
        stock: 0
    }
    const navigate = useNavigate();
    const [producto, setProducto] = useState(initialProductoState);
    const [entrada, setEntrada] = useState(initialTutorialState);
    //const [submitted, setSubmitted] = useState(false);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setProducto({ ...producto, [name]: value });
        setEntrada({... entrada, [name]: value});
    };

    const agregarEntrada = () => {
        var dataEntrada = {
            idProducto: entrada.idProducto,
            idProveedor: entrada.idProveedor,
        };

        var dataProducto = {
            precioCompra: producto.precioCompra,
            precioVenta: producto.precioVenta,
            stock: producto.stock
        }

        EntradaService.create(dataEntrada)
            .then(response => {
                setEntrada({
                    //id: response.data.id,
                    idProducto: response.dataEntrada.idProducto,
                    idProveedor: response.dataEntrada.idProveedor,
                });
                console.log(response.data);
                navigate('/entrada');
            })
            .catch(e => {
                console.log(e);
            });
        
        ProductoService.updateProductoEntrada(entrada.idProducto, dataProducto)
            .then(response => {
                setProducto({
                    precioCompra: response.dataProducto.precioCompra,
                    precioVenta: response.dataProducto.precioVenta,
                    stock: response.dataProducto.stock
                });
                console.log(response.dataProducto);
            })
            .catch(err => {
                console.log(err);
            })

        
    };

    return (
        <Container className="p-5">
            <Card>
                <CardHeader style={{ backgroundColor: '#4e73df', color: "white" }}>Crear Entrada</CardHeader>
                <CardBody>
                    <Form>

                        <FormGroup>
                            <Label for="idProducto">ID Producto</Label>
                            <Input
                                name='idProducto'
                                value={entrada.idProducto}
                                onChange={handleInputChange}
                                type="number"
                                className='form-control'
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="idProveedor">ID Proveedor</Label>
                            <Input
                                name="idProveedor"
                                value={entrada.idProveedor}
                                onChange={handleInputChange}
                                type="number"
                                className='form-control'
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="precioCompra">Precio de Compra</Label>
                            <Input
                                name="precioCompra"
                                value={producto.precioCompra}
                                onChange={handleInputChange}
                                type="number"
                                className='form-control'
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="precioVenta">Precio de Venta</Label>
                            <Input
                                name="precioVenta"
                                value={producto.precioVenta}
                                onChange={handleInputChange}
                                type="number"
                                className='form-control'
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="stock">Cantidad Producto</Label>
                            <Input
                                name="stock"
                                value={producto.stock}
                                onChange={handleInputChange}
                                type="number"
                                className='form-control'
                            />
                        </FormGroup>

                        <Button onClick={agregarEntrada} color="info">
                            Guardar
                        </Button>

                        <Link to="/entrada" className="btn btn-secondary">Volver</Link>

                    </Form>
                </CardBody>
            </Card>
        </Container>
    );
};

export default EntradaForm;
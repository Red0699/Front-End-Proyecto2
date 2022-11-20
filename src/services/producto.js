import http from '../http-common';

const getAll = () => {
  return http.get("/productos");
};

const getAllProdEnIn = () => {
  return http.get("/productosEnIn");
};

const getAllProdEn = () => {
  return http.get("/productosEn")
}

const get = id => {
  return http.get(`/productos/${id}`);
};

const create = data => {
  return http.post("/productos", data);
};

export const updateProducto = async (id, data) => {
  return await fetch(`http://localhost:5000/api/productos/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "descripcion": String(data.descripcion).trim(),
      "almacen": String(data.almacen).trim(),
      "idCategoria": parseInt(data.idCategoria),
      //"precioCompra": parseFloat(data.precioCompra),
      //"precioVenta": parseFloat(data.precioVenta),
      //"stock": parseInt(data.stock),
      "estadoProd": String(data.estado).trim()
    })
  });
};

export const updateProductoEntrada = async (id, data) => {
  return await fetch(`http://localhost:5000/api/productosEntrada/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "precioCompra": parseFloat(data.precioCompra),
      "precioVenta": parseFloat(data.precioVenta),
      "stock": parseInt(data.stock),
    })
  });
};

export const updateProductoSalida = async (id, data) => {
  const res = await http.get(`/productos/${id}`)
  return await fetch(`http://localhost:5000/api/productosEntrada/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "precioCompra": res.data[0].precioCompra,
      "precioVenta": res.data[0].precioVenta,
      "stock": parseFloat(data.stock),
    })
  });
}

export const deshabilitarProducto = async (id) => {
  const res = await http.get(`/productos/${id}`)

  return await fetch(`http://localhost:5000/api/productos/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "descripcion": res.data[0].descripcion,
        "almacen": res.data[0].almacen,
        "idCategoria": res.data[0].idCategoria,
        "estadoEntrada": "Inactivo",
        "estadoProd": "Inactivo"
    })
  });
}

export const deshabilitarEntrada = async (id) => {
  const res = await http.get(`/productos/${id}`)

  return await fetch(`http://localhost:5000/api/productos/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "descripcion": res.data[0].descripcion,
        "almacen": res.data[0].almacen,
        "idCategoria": res.data[0].idCategoria,
        "estadoProd": res.data[0].estadoProd,
        "estadoEntrada": "Inactivo"
    })
  });
}

/*
const findByTitle = title => {
  return http.get(`/tutorials?title=${title}`);
};
*/

const ProductoService = {
  getAll,
  get,
  create,
  updateProducto,
  deshabilitarProducto,
  updateProductoEntrada,
  updateProductoSalida,
  deshabilitarEntrada,
  getAllProdEnIn,
  getAllProdEn
  //findByTitle
};

export default ProductoService;
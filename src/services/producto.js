import http from '../http-common';

const getAll = () => {
  return http.get("/productos");
};

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
      "estado": String(data.estado).trim()
    })
  });
};

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
        "estado": "Inactivo"
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
  deshabilitarProducto
  //findByTitle
};

export default ProductoService;
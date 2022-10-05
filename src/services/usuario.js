const API_URL = 'http://localhost:5000/api/usuarios/'

export const listCompanies = async () => {
    return await fetch(API_URL);
};

export const getUsuario = async (idUsuario) => {
    return await fetch(`${API_URL}${idUsuario}`);
};

export const insertUsuario = async (data) => {
    return await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({

            "primerNombre": String(data.primerNombre).trim(),
            "segundoNombre": String(data.segundoNombre).trim(),
            "apellidoPaterno": String(data.apellidoPaterno).trim(),
            "apellidoMaterno": String(data.apellidoMaterno).trim(),
            "telefono": String(data.telefono).trim(),
            "correo": String(data.correo).trim(),
            "contraseña": String(data.contraseña).trim(),
            "idRol": parseInt(data.idRol)
        })
    });
};

export const updateUsuario = async (id, data) => {
    return await fetch(`${API_URL}${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "primerNombre": String(data.primerNombre).trim(),
            "segundoNombre": String(data.segundoNombre).trim(),
            "apellidoPaterno": String(data.apellidoPaterno).trim(),
            "apellidoMaterno": String(data.apellidoMaterno).trim(),
            "telefono": String(data.telefono).trim(),
            "correo": String(data.correo).trim(),
            "contraseña": String(data.contraseña).trim(),
            "idRol": parseInt(data.idRol)
        })
    });
};

export const deleteUsuario = async (id) => {
    return await fetch(`${API_URL}${id}`, {
        method: 'DELETE'
    });
};
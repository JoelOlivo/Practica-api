// **PETICIONES HTTP**

const chisteUrl = 'https://api.chucknorris.io/jokes/random';
const usuarioUrl = 'https://reqres.in/api/users?page=2';

//Cloudinary
const cloudPreset = 'kiu7naqb';
const cloudUrl = 'https://api.cloudinary.com/v1_1/dnn7psqle/upload';

// fetch(chisteUrl).then(res => {  // la promesa necesita transformarse a json

//     res.json().then(data => {  
//         console.log(data.id, data.value);
//     });

// });

// fetch(chisteUrl)
//     .then(resp=> resp.json())
//     .then(console.log);

// **OBTENER CHISTE**

const obtenerChiste = async () => {

    try {
        
        const resp = await fetch(chisteUrl);
    
        if (!resp.ok) {
            throw Error('Efe compañero :( no se pudo realizar la petición');
        }
    
        // const {value, icon_url, id} = await resp.json(); 
        // return {value, icon_url, id};

        return resp

    } catch (error) {

        throw error;
    }
}

const obtenerUsuarios = async () => {

    const resp = await fetch(usuarioUrl);
    const {data} = await resp.json();

    return data;
}

const subirImagen = async (imagen) => {

    const formData = new FormData();
    formData.append('upload_preset', cloudPreset);
    formData.append('file', imagen);

    try {
        
        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        });
        
        if (resp.ok) {
            const cloudResp = await resp.json();
            // console.log(cloudResp);
            return cloudResp.secure_url;
        } else {
            throw await resp.json();    
        }
        
    } catch (error) {
        throw error;
    }
}


// EXPORTAR FUNCIONES

export {
    obtenerChiste,
    obtenerUsuarios,
    subirImagen
}

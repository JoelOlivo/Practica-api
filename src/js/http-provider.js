// **PETICIONES HTTP**

const chisteUrl = 'https://api.chucknorris.io/jokes/random';
const usuarioUrl = 'https://reqres.in/api/users?page=2';

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


// EXPORTAR FUNCIONES

export {
    obtenerChiste,
    obtenerUsuarios
}

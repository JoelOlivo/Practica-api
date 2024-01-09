import { subirImagen } from "./http-provider";

const body = document.body;
let inputFile, imgFoto; 

const crearInputFileHtml = () => {

    const html = `
    
    <h1 class="mt-5">Subir Archivo</h1>
    <hr>

    <label>Selecciona una imagen:</label><br>
    <input type="file" accept="image/png, image/jpeg"><br>
    <img id="foto" class="img-thumbnail" alt="foto" src="">

    `;

    const div = document.createElement('div');
    div.innerHTML = html;
    body.append(div);

    inputFile = document.querySelector('input');
    imgFoto = document.querySelector('#foto');
}

const eventos = () => {
    inputFile.addEventListener('change', (event) => {
        let img = event.target.files[0]
        // console.log(img);
        subirImagen(img).then((url) => {
            imgFoto.src = url
        }).catch(console.log);
    })
}

export const init = () => {
    crearInputFileHtml();
    eventos();
}
import { obtenerChiste } from "./http-provider";

// REFERENCIAS HTML
const body = document.body;
let btnChiste, olChiste; 

const crearChisteHtml = () => {

    const html = `
    
        <h1 class="mt-5">Chistes</h1>
        <hr>

        <button class="btn btn-primary">Nuevo Chiste</button>
        
        <ol class="mt-2 list-group">
        </ol>
    `; 

    const divChiste = document.createElement('div');
    divChiste.innerHTML = html;

    body.append(divChiste);
}

// EVENTOS 

const eventos = () => {

    olChiste = document.querySelector('ol');
    btnChiste = document.querySelector('button'); 

    btnChiste.addEventListener('click', () => {

        btnChiste.disabled = true;
        
        obtenerChiste().then( chiste => {
            dibujarChiste(chiste);
            btnChiste.disabled = false;

        });
    });

}

const dibujarChiste = (chiste) => {

    const itemChiste = document.createElement('li');
    itemChiste.innerHTML = `<strong>${chiste.id}</strong>: ${chiste.value}`;
    itemChiste.classList.add('list-group-item');
    olChiste.append(itemChiste);
}

export const init = () => {

    crearChisteHtml();
    eventos();
}
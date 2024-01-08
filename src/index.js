// import { obtenerChiste } from "./js/http-provider";
// import { obtenerUsuarios } from "./js/http-provider";
// import { init } from "./js/chistes-page";
// import { init } from "./js/usuarios-page";
import * as CRUD from "./js/crud-provider";

// obtenerChiste()
// .then(console.log)
// .catch(console.log)

// init();

// obtenerUsuarios()

CRUD.getUsuario(1).then(console.log);



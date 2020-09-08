const argv = require('./config/yargs').argv;
var colors = require('colors');

const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {

    case "crear":
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case "listar":

        let listado = porHacer.getListado();

        for (let tarea of listado) {
            console.log("======Por Hacer======".green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log("=====================".green);
        }

        break;

    case "actualizar":
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);

        if (actualizado) {
            console.log("Se actualizo la tarea con exito");
        } else {
            console.log(`No se encontro la tarea ${ argv.descripcion }`);
        }

        break;

    case "borrar":
        let borrado = porHacer.borrar(argv.descripcion);
        if (borrado) {
            console.log("Se borro la tarea con exito");
        } else {
            console.log(`No se encontro la tarea ${ argv.descripcion }`);
        }

        break;

    default:
        console.log("No se reconoce el comando");
        break;

}
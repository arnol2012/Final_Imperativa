const v = "\x1b[32m%s\x1b[0m"; // NO TOCAR
const o = "*".repeat(80) + "\n"; // NO TOCAR
const oo = "*".repeat(25); // NO TOCAR
// Te proveemos la siguiente plantilla que tiene dos partes:
// - Desarrollo de las consignas, donde escribirás el código que responda a los enunciados
// - Ejecución de las consignas, donde ejecutarás los métodos correspondientes mostrando por consola sus resultados
const nombre = "Arnol Galindo Martinez";
const tema = "TEMA 1";

/*******************************/
/* Desarrollo de las consignas */
/*******************************/
const archivos = require ("./jsonHelper.js")
// A Crear un objeto literal que represente la aplicación. 
//El objeto será la representación de nuestro sistema de gestión de películas, podemos llamarlo gestionDePeliculas y contendrá todas las propiedades y métodos necesarios.
let peliculas = archivos.leerJson("peliculas")

const gestionDePeliculas = {
    // B Agregar una propiedad llamada peliculas en la que asignarás las películas obtenidas a partir del método leer del objeto requerido como módulo (jsonHelper.js), el cual debes requerir como cualquier módulo, al comienzo del archivo, como hemos visto en las prácticas previas. 
    peliculas : peliculas,
    // C Agregar un método listarPeliculas que reciba como parámetro un array de películas y los imprima por consola.Este método deberá imprimir por consola un mensaje con el siguiente formato:{titulo}, de {director}. Duración de {duración} minutos, {premiada} ({calificación} en IMDB)
    listarPeliculas : function(array) {
        array.forEach(e => {
            console.log(`titulo: ${e.titulo},
            de ${e.director},
            duracion de ${e.duracion} minutos,
            premiada: ${e.fuePremiada ? 'Si fue premiada' : 'No fue premiada'},
            calificacion: ${e.calificacionIMDB} en IMDB `);
            
        });
    },
    // D Agregar un método buscarPorTitulo que permita buscar una película en función de su título.Este método recibirá por parámetro un valor de tipo String que represente el título a buscar.En caso de encontrar una película, devolverá el objeto literal que la representa.En caso contrario devolverá undefined
    buscarPorTitulo : function(String) {
        return this.peliculas.find((e) => e.titulo == String);
    },
    // E Agregar un método peliculasPremiadas, que retorne todas las películas premiadas, es decir, aquellas que tengan la propiedad fuePremiada en true.Este método no recibirá ningún parámetro.Este método debe recorrer el listado de películas completo para filtrar.Este método retornará  un array con las películas que tengan premios.
    peliculasPremiadas : function() {
        return this.peliculas.filter(e => e.fuePremiada == true)
    },
    // F  Agregar un método filtrarPorDuracion que permita filtrar las películas que tengan una duración que esté entre el mínimo y máximo enviado.Este método recibirá por parámetro dos valores de tipo Number que representan la duración mínima y máxima a buscar.Este método devolverá un array con todos las películas que tengan una duración mayor o igual al primer parámetro y menor o igual al segundo parámetro.En caso de no encontrar ninguna película, devolverá un array vacío.
    filtrarPorDuracion : function (min, max) {
        let filtro = this.peliculas.filter((e) => e.duracion >= min && e.duracion <= max)
        return filtro

    },

    // G Agregar un método ordenarPorCalificacion que permita ordenar las películas recibidas de menor a mayor según su calificación.Este método no recibirá ningún parámetroEste método retornará  un array con todas las películas ordenadas por su calificación.
    ordenarPorCalificacion : function() {
        return this.peliculas.sort((a, b) => a.calificacionIMDB - b.calificacionIMDB)
    },

    // H Agregar un método duracionTotal que permita calcular la duración total en minutos de todas las películas.Este método no recibirá ningún parámetro.Este método retornará  un string con el siguiente formato:La duración de todas las películas sumadas es de {duración} minutos
    duracionTotal : function() {
        let totalDuracion = this.peliculas.reduce((acc, item) => acc + item.duracion, 0);
        return "La duración de todas las películas sumadas es de " + totalDuracion + " minutos";
    },
    // I
    premiarPeliculaPorTitulo : function(String) {
        let premiar = this.buscarPorTitulo(String)
        if(premiar){
            premiar.fuePremiada = true
            archivos.escribirJson('peliculas.json', this.peliculas)
        }
        return [premiar]
    }



}















/******************************/
/* Ejecución de las consignas */
/******************************/
console.table([{ alumno: nombre, tema: tema }]); // NO MODIFICAR NADA DE ESTA LINEA

console.log(v, "\n" + oo + " .C. Listar");
gestionDePeliculas.listarPeliculas(gestionDePeliculas.peliculas)
console.log(o);

console.log(v, oo + " .D. Buscar");
gestionDePeliculas.listarPeliculas([gestionDePeliculas.buscarPorTitulo('The Mist')])
console.log(o);

console.log(v, oo + " .E. Filtrar 1");
gestionDePeliculas.listarPeliculas(gestionDePeliculas.peliculasPremiadas())
console.log(o);

console.log(v, oo + " .F. Filtrar 2");
gestionDePeliculas.listarPeliculas(gestionDePeliculas.filtrarPorDuracion(100, 401))
console.log(o);

console.log(v, oo + " .G. Ordenar");
gestionDePeliculas.listarPeliculas(gestionDePeliculas.ordenarPorCalificacion())
console.log(o);

console.log(v, oo + " .H. Duracion");
console.log(gestionDePeliculas.duracionTotal())
console.log(o);

console.log(v, oo + " .I. Modificar Propiedad");
gestionDePeliculas.buscarPorTitulo(gestionDePeliculas.premiarPeliculaPorTitulo('The Last Lovecraft: Relic of Cthulhu'))
console.log(o);
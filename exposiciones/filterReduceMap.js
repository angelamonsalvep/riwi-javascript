const t = [{
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid"
},
{
    nombre: "Ana",
    edad: 25,
    ciudad: "Barcelona"
},]

const estudiantes = [{
    nombre: "Carlos",
    calificaciones: [8, 9, 7],
},
{
    nombre: "María",
    calificaciones: [9, 9, 8],
},
{
    nombre: "Luis",
    calificaciones: [6, 7, 8],
}]

const promedios = estudiantes
    .map(estudiante => ({
        /* ...estudiante, */ //Si lo hago de esta manera me trae todas las propiedades
        nombre : estudiante.nombre, //Si lo hago así me trae solo el nombre, me excluye el array de notas
        promedio: estudiante.calificaciones
            .reduce((a, b) => a + b) / estudiante.calificaciones.length
    }))
    .filter(estudiante => estudiante.promedio >= 8)
    .sort((a,b) => a.promedio - b.promedio);

console.log(promedios);
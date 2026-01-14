

function increaseId() {
    let id = 0
    return function () {
        id++
        return id
    }
}
const sumarId = increaseId()


class Product {
    constructor(id, nombre, precio) {
        this.id = id
        this.nombre = nombre
        this.precio = precio
    }

}



export {
    Product,
    sumarId
}


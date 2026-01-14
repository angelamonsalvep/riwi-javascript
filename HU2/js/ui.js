const btnAgregar = document.getElementById('btnAgregar')
const inpName = document.getElementById('inpName')
const inpPrice = document.getElementById('inpPrice')


const listaProductos = document.querySelector('.productsList')
const btnDelete = document.querySelector('.btn-delete')


const plantillaProducto = (producto) => `
    <p>${producto.nombre}</p>
    <p>${producto.precio}</p>
    <span class="btn-delete material-symbols-outlined">
delete
</span>
    `


function renderProduct(producto) {
    const li = document.createElement('li')
    li.classList.add("product-item")
    li.innerHTML = plantillaProducto(producto)
    listaProductos.appendChild(li)
}

export {
    btnAgregar,
    inpName,
    listaProductos,
    inpPrice,
    btnDelete,
    renderProduct
}
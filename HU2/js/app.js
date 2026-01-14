import { Product, sumarId } from './product.js'
import { btnAgregar, inpName, inpPrice, btnDelete, listaProductos, renderProduct } from './ui.js'


btnAgregar.addEventListener('click', () => {
    const product = new Product(
        sumarId(),
        inpName.value,
        Number(inpPrice.value)
    )
    renderProduct(product)
    inpName.value = ''
    inpPrice.value = ''
})


listaProductos.addEventListener('click', (e) => {
    const deleteBtn = e.target.closest('.btn-delete')
    if (!deleteBtn) return
    const productItem = e.target.closest('.product-item')
    productItem.remove(productItem)
})





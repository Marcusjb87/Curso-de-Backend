class ProductManager {
    static ultimo_id = 0
    constructor() {
        this.productos = []
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        ProductManager.ultimo_id += 1

        const nuevo_producto = {
            id: ProductManager.ultimo_id,
            title: title,
            description: description,
            price: price,
            thumbnail: thumbnail,
            code: code,
            stock: stock
        }

        this.productos.push(nuevo_producto)
    }

    getProducts() {
        console.log(this.productos)
    }

    getProductsById() {
    if (this.productos.id = this.productos.find(id)) {
        return this.productos.id
    } else {
        console.log ("Not found")
    }
    }
}


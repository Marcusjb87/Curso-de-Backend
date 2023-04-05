const fs = require('fs')

class ProductManager {
    static ultimo_id = 0
    constructor() {
        this.productos = []
        this.path = './listado.json'
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

        const requeridos = ['title', 'description', 'price', 'thumbnail', 'code', 'stock']

        const verificarRequeridos = (obj, obligatorios) => {
            return obligatorios.every(campo => Object.prototype.hasOwnProperty.call(obj, campo) && obj[campo] !== null)
        }

        this.productos.push(nuevo_producto)

        const guardarProducto = async () => {
            await fs.promises.writeFile(this.path, JSON.stringify(nuevo_producto))
            console.log("Producto almacenado")
        }
    }

    getProducts() {
        return console.log(this.productos)

        const leerProductos = async () => {
            try {
                const contenido = await fs.promises.readFile(JSON.parse(this.path, 'utf-8'))
            }
            catch(err) {
                console.log(err)
            }
        }
    }

    getProductsById() {
        const buscar = (id, valor) => {
            const coincidencia = this.productos.find((elemento) => elemento[id] === valor)
            return (coincidencia ? coincidencia : console.log("Not found")) 
        }   
    }

    updateProduct() {
        const update = (id, campo, nuevoValor) => {
            const indice = this.productos.findIndex(obj => obj.id === id)
            if (indice !== -1) {
                this.productos[indice][campo] = nuevoValor
            }
        }
    }

    deleteProduct() {
        const borrar = (array, id) => {
            array.forEach((item, index) => {
                if (item.id === id) {
                    array.splice(index, 1)
                }
            })
        }
    }
}


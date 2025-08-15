// Array de productos manual (simula la API)
const productos = [
    {
        "SKU": "0K3QOSOV4V",
        "title": "iPhone 13 Pro",
        "price": 938.99
    },
    {
        "SKU": "TGD5XORY1L",
        "title": "Cargador",
        "price": 49.99
    },
    {
        "SKU": "IOKW9BQ9F3",
        "title": "Funda de piel",
        "price": 79.99
    }
];

class Carrito {
    #productos;
    #currency;

    constructor() {
        // Inicializa los productos con quantity en 0
        this.#productos = productos.map(producto => ({ ...producto, quantity: 0 }));
        this.#currency = "€";
    }

    // --- CÓDIGO ORIGINAL PARA USAR API ---
    /*
    async cargarProductos() {
        const response = await fetch("https://jsonblob.com/api/https://jsonblob.com/1334224911211880448"); // Reemplaza con tu API
        const data = await response.json();
        this.#productos = data.products.map(producto => ({ ...producto, quantity: 0 }));
    }
    */
    // --- FIN CÓDIGO API ---

    actualizarUnidades(sku, unidades) {
        const producto = this.#productos.find(p => p.SKU === sku);
        if (producto) {
            producto.quantity = unidades;
        }
    }

    obtenerInformacionProducto(sku) {
        return this.#productos.find(p => p.SKU === sku);
    }

    obtenerCarrito() {
        const productosEnCarrito = this.#productos.filter(p => p.quantity > 0);
        const total = productosEnCarrito.reduce((sum, p) => sum + (p.price * p.quantity), 0).toFixed(2);
        return { total, currency: this.#currency, products: productosEnCarrito };
    }

    get productos() {
        return this.#productos;
    }
}

// Inicializar carrito y renderizar productos
document.addEventListener("DOMContentLoaded", () => {
    const carrito = new Carrito();
    // Si volvemos a usar la API, descomenta la siguiente línea y comenta la inicialización manual:
    // await carrito.cargarProductos();
    renderizarProductos(carrito);
    actualizarTotal(carrito);
});

// Función para renderizar productos en el DOM
function renderizarProductos(carrito) {
    const contenedor = document.getElementById("productos");
    contenedor.innerHTML = "";
    carrito.productos.forEach(producto => {
        const item = document.createElement("tr");
        item.innerHTML = `
            <td>
                <div>${producto.title}</div>
                <div class="referencia">Ref: ${producto.SKU}</div>
            </td>
            <td>
                <div class="cantidad-wrapper">
                    <button class="restar" data-sku="${producto.SKU}">-</button>
                    <input type="number" value="${producto.quantity}" min="0" id="qty-${producto.SKU}">
                    <button class="sumar" data-sku="${producto.SKU}">+</button>
                </div>
            </td>
            <td>${producto.price}€</td>
            <td id="total-${producto.SKU}">${(producto.price * producto.quantity).toFixed(2)}€</td>
        `;
        item.querySelector(".restar").addEventListener("click", () => {
            const input = item.querySelector("input");
            let cantidad = Math.max(0, parseInt(input.value) - 1);
            input.value = cantidad;
            carrito.actualizarUnidades(producto.SKU, cantidad);
            actualizarTotal(carrito);
        });
        item.querySelector(".sumar").addEventListener("click", () => {
            const input = item.querySelector("input");
            let cantidad = parseInt(input.value) + 1;
            input.value = cantidad;
            carrito.actualizarUnidades(producto.SKU, cantidad);
            actualizarTotal(carrito);
        });
        contenedor.appendChild(item);
    });
}
    
// Función para actualizar el total en el DOM
function actualizarTotal(carrito) {
    const resumen = document.getElementById("resumen");
    const totalElement = document.getElementById("total");
    const carritoData = carrito.obtenerCarrito();
    resumen.innerHTML = carritoData.products.map(p => `
        <p>${p.title} <span>${(p.price * p.quantity).toFixed(2)}€</span></p>
    `).join("");
    totalElement.innerText = `${carritoData.total}€`;
    carrito.productos.forEach(p => {
        const totalProductoElement = document.getElementById(`total-${p.SKU}`);
        if (totalProductoElement) {
            totalProductoElement.innerText = (p.price * p.quantity).toFixed(2) + "€";
        }
    });
}
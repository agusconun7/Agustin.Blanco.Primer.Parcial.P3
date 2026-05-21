const tablaCarrito = document.querySelector("#tabla-carrito");
const valorFinal = document.querySelector("#valor-final");
const btnVaciar = document.querySelector(".btn-limpiar-carrito");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];




function mostrarCarrito() {
    tablaCarrito.innerHTML =`
    <tr class="fila-header-carrito">
        <td class="celda-header-tabla-carrito">
            Nombre del producto
        </td>    
        <td class="celda-header-tabla-carrito">
            Cantidad
        </td>
        <td class="celda-header-tabla-carrito">
            Precio unitario
        </td>
    </tr>                
    `;
    if (carrito.length === 0) {
        tablaCarrito.innerHTML += `
        <tr>
            <td colspan="3">
                El carrito esta vacio
            </td>
        
        </tr>    
        
        `;
        valorFinal.textContent = "Total: $0";
        return;
    }
    let total = 0;
    carrito.forEach(producto => {
        total += producto.precio * producto.cantidad
        tablaCarrito.innerHTML += `
        
        <tr>
            <td>
                ${producto.nombre}
            </td>
            <td>
                ${producto.cantidad}
            </td>
            <td>
                ${producto.precio}
            </td>   
        </tr>                                                
        `;
        

    });
    valorFinal.textContent =
    `El valor final a pagar es de: $${total}`;
}

function vaciarCarrito() 
{
    carrito = [];
    localStorage.removeItem("carrito");
    mostrarCarrito();
}
btnVaciar.addEventListener(
    "click",
    vaciarCarrito
);


mostrarCarrito()
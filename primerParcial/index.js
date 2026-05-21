const listadoHamburguesas = document.querySelector("#listado-hamburguesas")
const listadoBebidas = document.querySelector("#listado-bebidas")
const listadoTragos = document.querySelector("#listado-tragos")
let hamburguesas = [
    {'id': 1, 'nombre': 'Armonia', 'precio': 12000, 'descripcion': 'Doble medallón de carne, queso cheddar, queso roquefort, huevo frito y pan con queso gratinado.', 'img': './assets/hamburguesas/burga-1.jpg'},
    {'id': 2, 'nombre': 'Doble batalla', 'precio': 15000, 'descripcion': 'Doble medallón de carne, doble queso cheddar, doble beacon, cebolla caramelizada y pan con semillas de sésamo.', 'img': './assets/hamburguesas/burga-2.jpg'},
    {'id': 3, 'nombre': 'Clásica Law', 'precio': 9000, 'descripcion': 'Medallón de carne, queso cheddar, panceta, cebolla crispy, salsa barbacoa, tomate, lechuga y pan con semillas de sésamo.', 'img': './assets/hamburguesas/burga-3.jpg'},
    {'id': 4, 'nombre': 'Exotically', 'precio': 16500, 'descripcion': 'Medallón de carne, doble queso roquefort, rúcula, cebolla caramelizada, tomate, hongo portobello salteado y pan brioche con semillas.', 'img': './assets/hamburguesas/burga-4.jpg'},
    {'id': 5, 'nombre': 'La Bestia', 'precio': 19000, 'descripcion': 'Quíntuple medallón de carne, 5 capas de cheddar, panceta en cada piso, cheddar en cada piso, queso especial derretido y pan con queso gratinado.', 'img': './assets/hamburguesas/burga-5.jpg'},
    {'id': 6, 'nombre': 'Nuggy Chop', 'precio': 14500, 'descripcion': 'Doble medallón de carne, doble queso cheddar, doble panceta, cebolla caramelizada, Nuggets de muzzarella y pan con queso gratinado.', 'img': './assets/hamburguesas/burga-6.jpg'},
]

let bebidas = [
     {'id': 7, 'nombre': 'Agua sin gas (1L)', 'precio': 2000, 'descripcion': 'Botella 1 litro agua Villavicencio sin gas.', 'img': './assets/bebidas/agua-con-gas.png'},
    {'id': 8, 'nombre': 'Agua con gas (1L)', 'precio': 1500, 'descripcion': 'Botella 1 litro agua Saldan con gas.', 'img': './assets/bebidas/agua-sin-gas.png'},
    {'id': 9, 'nombre': 'Aquarius Manzana (3L)', 'precio': 5500, 'descripcion': 'Botella 3 litros agua saborizada Aquarius de manzana.', 'img': './assets/bebidas/aquarius-manzana.png'},
    {'id': 10, 'nombre': 'Aquarius Pomelo (3L)', 'precio': 5500, 'descripcion': 'Botella 3 litros agua saborizada Aquarius de pomelo.', 'img': './assets/bebidas/aquarius-pomelo.png'},
    {'id': 11, 'nombre': 'Aquarius Naranja (3L)', 'precio': 5500, 'descripcion': 'Botella 3 litros agua saborizada Aquarius de naranja.', 'img': './assets/bebidas/aquarius-naranja.png'},
    {'id': 12, 'nombre': 'Coca-Cola (1.5L)', 'precio': 4500, 'descripcion': 'Botella 1.5 litros de Coca-Cola.', 'img': './assets/bebidas/coca-cola.png'},
    {'id': 13, 'nombre': 'Sprite (1.5L)', 'precio': 4500, 'descripcion': 'Botella 1.5 litros de Sprite.', 'img': './assets/bebidas/sprite.png'},
]

let tragos = [
    {'id': 14, 'nombre': 'Campari', 'precio': 6000, 'descripcion': 'Vaso de Campari y jugo de naranja.', 'img': './assets/tragos/campari.png'},
    {'id': 15, 'nombre': 'Fernet', 'precio': 7000, 'descripcion': 'Vaso de Coca-Cola y Fernet.', 'img': './assets/tragos/fernet.png'},
    {'id': 16, 'nombre': 'Gancia', 'precio': 6000, 'descripcion': 'Vaso de Gancia y Sprite.', 'img': './assets/tragos/gancia.png'},
    {'id': 17, 'nombre': 'Ron Havana Club', 'precio': 9000, 'descripcion': 'Vaso de Ron y Coca-Cola.', 'img': './assets/tragos/ron.png'},
    {'id': 18, 'nombre': 'Daiquiri', 'precio': 7000, 'descripcion': 'Vaso de Daiquiri.', 'img': './assets/tragos/daiquiri.png'},
]
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
function mostrarProductos() {

    hamburguesas.forEach(hamburguesa => {

        listadoHamburguesas.innerHTML += `

        <li class="card-producto">

            <img
                class="img-producto"
                src="${hamburguesa.img}"
                alt="${hamburguesa.nombre}"
            >

            <div>

                <h3 class="nombre-producto">
                    ${hamburguesa.nombre}
                </h3>

                <p class="precio-producto">
                    $${hamburguesa.precio}
                </p>

                <p class="descripcion-producto">
                    ${hamburguesa.descripcion}
                </p>

            </div>

            <button
                class="btn-sumar-a-carrito"
                onclick="sumarAlCarrito(${hamburguesa.id})"
            >
                +
            </button>

            <button
                class="btn-restar-a-carrito"
                onclick="restarDelCarrito(${hamburguesa.id})"
            >
                -
            </button>

        </li>

        `;

    });

    bebidas.forEach(bebida => {

        listadoBebidas.innerHTML += `

        <li class="card-producto">

            <img
                class="img-producto"
                src="${bebida.img}"
                alt="${bebida.nombre}"
            >

            <div>

                <h3 class="nombre-producto">
                    ${bebida.nombre}
                </h3>

                <p class="precio-producto">
                    $${bebida.precio}
                </p>

                <p class="descripcion-producto">
                    ${bebida.descripcion}
                </p>

            </div>

            <button
                class="btn-sumar-a-carrito"
                onclick="sumarAlCarrito(${bebida.id})"
            >
                +
            </button>

            <button
                class="btn-restar-a-carrito"
                onclick="restarDelCarrito(${bebida.id})"
            >
                -
            </button>

        </li>

        `;

    });

    tragos.forEach(trago => {

        listadoTragos.innerHTML += `

        <li class="card-producto">

            <img
                class="img-producto"
                src="${trago.img}"
                alt="${trago.nombre}"
            >

            <div>

                <h3 class="nombre-producto">
                    ${trago.nombre}
                </h3>

                <p class="precio-producto">
                    $${trago.precio}
                </p>

                <p class="descripcion-producto">
                    ${trago.descripcion}
                </p>

            </div>

            <button
                class="btn-sumar-a-carrito"
                onclick="sumarAlCarrito(${trago.id})"
            >
                +
            </button>

            <button
                class="btn-restar-a-carrito"
                onclick="restarDelCarrito(${trago.id})"
            >
                -
            </button>

        </li>

        `;

    });

}

function sumarAlCarrito(id) {

    const todosLosProductos = [
        ...hamburguesas,
        ...bebidas,
        ...tragos
    ];

    const productoEncontrado = todosLosProductos.find(
        producto => producto.id === id
    );

    const productoEnCarrito = carrito.find(
        producto => producto.id === id
    );

    if (productoEnCarrito) {

        productoEnCarrito.cantidad++;

    } else {

        carrito.push({
            ...productoEncontrado,
            cantidad: 1
        });

    }

    localStorage.setItem(
        "carrito",
        JSON.stringify(carrito)
    );

    alert(`${productoEncontrado.nombre} agregado al carrito`);

    console.log(carrito);

}



function restarDelCarrito(id) {

    const productoEnCarrito = carrito.find(
        producto => producto.id === id
    );

    if (!productoEnCarrito) {

        alert("Ese producto no está en el carrito");

        return;
    }

    productoEnCarrito.cantidad--;

    if (productoEnCarrito.cantidad <= 0) {

        carrito = carrito.filter(
            producto => producto.id !== id
        );

    }

    localStorage.setItem(
        "carrito",
        JSON.stringify(carrito)
    );

    alert(`${productoEnCarrito.nombre} eliminado del carrito`);

    console.log(carrito);

}

mostrarProductos();

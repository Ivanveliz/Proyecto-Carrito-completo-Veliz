//array de productos ejemplos

const productos = [{
        id: "remera01",
        titulo: "Remera 01",
        precio: 1000,
        imagen: "./img/remera/remera 1.jfif",
        categoria: {
            nombre: "Remeras",
            id: "remeras"
        }

    },
    {
        id: "remera02",
        titulo: "Remera 02",
        imagen: "./img/remera/remera 2.jfif",
        precio: 1000,
        categoria: {
            nombre: "Remeras",
            id: "remeras"
        }

    },

    {
        id: "pantalon01",
        titulo: "Pantalon 01",
        imagen: "img/pantalon/pantalon 1.jfif",
        precio: 1000,
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        }

    },
    {
        id: "pantalon02",
        titulo: "Pantalon 02",
        imagen: "img/pantalon/pantalon 1.jfif",
        precio: 1000,
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        }

    },
    {
        id: "camisa01",
        titulo: "Camisa 01",
        imagen: "./img/camisa/Camisa1.jpg",
        precio: 1000,
        categoria: {
            nombre: "Camisas",
            id: "camisas"
        }

    },
    {
        id: "camisa02",
        titulo: "Camisa 02",
        imagen: "./img/camisa/Camisa2.jpg",
        precio: 1000,
        categoria: {
            nombre: "Camisas",
            id: "camisas"
        }

    },

]


// elementos del DOM
const contenedorProductos = document.querySelector("#contenedor-productos")
const botonesCategoria = document.querySelectorAll(".boton-cat")
const tituloPrincipal = document.querySelector("#titulo-principal")
let botonesAgregarProducto = document.querySelectorAll(".agregar-producto")
const numero = document.querySelector("#numero")
const botonCarrito = document.querySelector("boton-carrito")


//funcion para cargar los productos 
function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";


    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
                <img class="imagen-producto" src="${producto.imagen}" alt="${producto.titulo}" height="350px" >
                <div class="detalles-producto">
                    <h3 class="titulo-producto">${producto.titulo} </h3>
                    <p class="precio-producto">$${producto.precio}</p>
                    <button class="agregar-producto" id="${producto.id}">Agregar</button>
            </div>
            `;
        contenedorProductos.append(div)

    })

    actualizarBotonAgregar()
}

cargarProductos(productos)


//funcion para filtrar los productos por categoria 
botonesCategoria.forEach(boton => {
    boton.addEventListener("click", (e) => {


        botonesCategoria.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productosFiltrados = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosFiltrados);
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;

        } else {

            tituloPrincipal.innerText = "Todos los productos"
            cargarProductos(productos);

        }


    })

})


//funcion para los botones agregar producto
function actualizarBotonAgregar() {
    botonesAgregarProducto = document.querySelectorAll(".agregar-producto");

    botonesAgregarProducto.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito)
    })
}



let productosEnCarrito
const productosEnCarritoLs = JSON.parse(localStorage.getItem("productos-en-carrito"))
if (productosEnCarritoLs) {
    productosEnCarrito = productosEnCarritoLs
    actualizarNumero()
} else {
    productosEnCarrito = [];
}



//esta funcion identifica el boton con el id del producto si coincide lo agrega al carrito, tambien identifica si es el mismo producto para eso le agregue una proiedad mas "cantidad" 
function agregarAlCarrito(e) {

    const identificadorBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === identificadorBoton);


    if (productosEnCarrito.some(producto => producto.id === identificadorBoton)) {

        const index = productosEnCarrito.findIndex(producto => producto.id === identificadorBoton)
        productosEnCarrito[index].cantidad++;

    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado)
    }

    actualizarNumero()
    //guardo en el LS el array productos  en carrito
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}
//funcion que actualiza el numero de productos del html

function actualizarNumero() {
    let numeroCarrito = productosEnCarrito.reduce((acumulador, producto) => acumulador + producto.cantidad, 0);
    numero.innerText = numeroCarrito;
}
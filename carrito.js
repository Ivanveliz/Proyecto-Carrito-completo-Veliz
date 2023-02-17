const productosEnCarrito = JSON.parse(localStorage.getItem("productos-en-carrito"))

//elementos del DOM
const carritoVacio = document.querySelector("#carrito-vacio");
const carritoProductos = document.querySelector("#carrito-productos");
const carritoAcciones = document.querySelector("#carrito-acciones");
const carritoComprado = document.querySelector("#carrito-comprado");
let botonesEliminar = document.querySelectorAll(".carrito-producto-borrar")

//agrego y saco las clases para que vea lo que  yo quiero

function cargarProductosCarrito(){

    if (productosEnCarrito){

        carritoVacio.classList.add("ocultar")
        carritoProductos.classList.remove("ocultar")
        carritoAcciones.classList.remove("ocultar")
        carritoComprado.classList.add("ocultar")
    
        //creo desde aca los productos que se van a querer comprar
        carritoProductos.innerHTML= "";
    
        productosEnCarrito.forEach(producto => {
            const div =document.createElement("div");
            div.classList.add("carrito.producto");
            div.innerHTML=`
            <div class="carrito-producto">
            <img src="${producto.imagen}" class="carrito-imagen" alt="${producto.titulo}">
            <div class="carrito-producto-titulo">
                <small>Título</small>
                <h3>${producto.titulo}</h3>
            </div>
            <div class="carrito-producto-cantidad">
                <small>Cantidad</small>
                <p>${producto.cantidad}</p>
            </div>
            <div class="carrito-producto-precio">
                <small>Precio</small>
                <p>1000</p>
            </div>
            <div class="carrito-producto-subtotal">
                <small>Subtotal</small>
                <p>$${producto.precio * producto.cantidad}</p>
            </div>
            <button class="carrito-producto-borrar" id="${producto.id}"><i class="bi bi-trash3-fill"></i></button>
        </div>
            `;
            carritoProductos.append(div);
        })
    
    }else{
        carritoVacio.classList.remove("ocultar")
        carritoProductos.classList.add("ocultar")
        carritoAcciones.classList.add("ocultar")
        carritoComprado.classList.add("ocultar")
    }
        
    actualizarbotonEliminar()
    }

    cargarProductosCarrito()


    actualizarbotonEliminar()

function actualizarbotonEliminar() {
    botonesEliminar = document.querySelectorAll(".carrito-producto-borrar");

    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito)
    })
}

function eliminarDelCarrito (e){
    let identificadorBoton = e.currentTarget.id;
    const productoEliminado = productosEnCarrito.find(producto => producto.id === identificadorBoton)
    const index = productosEnCarrito.findIndex(producto => producto.id === identificadorBoton)
    
    
}


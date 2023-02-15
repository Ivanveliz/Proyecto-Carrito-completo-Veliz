const productosEnCarrito = JSON.parse(localStorage.getItem("productos-en-carrito"));

console.log(productosEnCarrito)
const carritoVacio = document.querySelector("#carrito-vacio");
const carritoProductos = document.querySelector("#carrito-productos");
const carritoAcciones = document.querySelector("#carrito-acciones");
const carritoComprado = document.querySelector("#carrito-comprado");

if(productosEnCarrito){

    carritoVacio.classList.add("ocultar");
    carritoProductos.classList.remove("ocultar");
    carritoAcciones.classList.remove("ocultar");
    carritoComprado.classList.add("ocultar");

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


}
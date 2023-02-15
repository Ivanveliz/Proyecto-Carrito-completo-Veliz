const productos = [{
        id: "remera01",
        titulo: "Remera 01",
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
        categoria: {
            nombre: "Remeras",
            id: "remeras"
        }

    },

    {
        id: "pantalon01",
        titulo: "Pantalon 01",
        imagen: "img/pantalon/pantalon 1.jfif",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        }

    },
    {
        id: "pantalon02",
        titulo: "Pantalon 02",
        imagen: "img/pantalon/pantalon 1.jfif",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        }

    },
    {
        id: "camisa01",
        titulo: "Camisa 01",
        imagen: "./img/camisa/Camisa1.jpg",
        categoria: {
            nombre: "Camisas",
            id: "camisas"
        }

    },
    {
        id: "camisa02",
        titulo: "Camisa 02",
        imagen: "./img/camisa/Camisa2.jpg",
        categoria: {
            nombre: "Camisas",
            id: "camisas"
        }

    },
    
]

// elementos del DOM
const contenedorProductos =document.querySelector("#contenedor-productos")
const botonesCategoria = document.querySelectorAll(".boton-cat")
const tituloPrincipal = document.querySelector("#titulo-principal")
let botonesAgregarProducto = document.querySelectorAll(".agregar-producto")
const numero = document.querySelector("#numero")


function cargarProductos(productosElegidos){
    contenedorProductos.innerHTML ="";
    productosElegidos.forEach(producto =>{

        
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

    actualizarBotonAgregar ()
}


cargarProductos(productos)

botonesCategoria.forEach(boton =>{
    boton.addEventListener("click", (e)=> {
    

        botonesCategoria.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");
        
        if (e.currentTarget.id !="todos"){
            const productosFiltrados = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosFiltrados);
            const productoCategoria = productos.find (producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;

        }else{

            tituloPrincipal.innerText = "Todos los productos"
            cargarProductos(productos);

        }


    })

})

function actualizarBotonAgregar (){
    botonesAgregarProducto = document.querySelectorAll(".agregar-producto");

        botonesAgregarProducto.forEach(boton => {
            boton.addEventListener("click", agregarAlCarrito)
        })
    }

const productosEnCarrito =[]

    function agregarAlCarrito (e){

        const identificadorBoton = e.currentTarget.id;
        const productoAgregado = productos.find(producto => producto.id === identificadorBoton);
        
        
        if(productosEnCarrito.some(producto =>producto.id === identificadorBoton)) {

            const index = productosEnCarrito.findIndex(producto => producto.id === identificadorBoton)
            productosEnCarrito[index].cantidad++;

        } else {
            productoAgregado.cantidad = 1;
            productosEnCarrito.push(productoAgregado)
        }

        actualizarNumero()

}

    function actualizarNumero(){
        let  numeroCarrito = productosEnCarrito.reduce((acumulador, producto) => acumulador + producto.cantidad, 0);
        numero.innerText = numeroCarrito;
    }
    










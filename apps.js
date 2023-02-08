const productos = [{
        id: "remera01",
        titulo: "Remera 01",
        imagen: "./img/remera/remera 1.jfif",
        catergoria: {
            nombre: "Remeras",
            id: "Remeras"
        }

    },
    {
        id: "remera02",
        titulo: "Remera 02",
        imagen: "./img/remera/remera 2.jfif", 
        catergoria: {
            nombre: "Remeras",
            id: "remeras"
        }

    },

    {
        id: "pantalon01",
        titulo: "Pantalon 01",
        imagen: "img/pantalon/pantalon 1.jfif",
        catergoria: {
            nombre: "Pantalones",
            id: "pantalones"
        }

    },
    {
        id: "pantalon02",
        titulo: "Pantalon 02",
        imagen: "img/pantalon/pantalon 1.jfif",
        catergoria: {
            nombre: "Pantalones",
            id: "pantalones"
        }

    },
    {
        id: "camisa01",
        titulo: "Camisa 01",
        imagen: "./img/camisa/Camisa1.jpg",
        catergoria: {
            nombre: "Camisas",
            id: "camisas"
        }

    },
    {
        id: "camisa02",
        titulo: "Camisa 02",
        imagen: "./img/camisa/Camisa2.jpg",
        catergoria: {
            nombre: "Camisas",
            id: "camisas"
        }

    },
    
]
const contenedorProductos =document.querySelector("#contenedor-productos")
const botonesCategoria = document.querySelectorAll(".boton-cat ")

function cargarProductos(productosElegidos){

    contenedorProductos.innerHTML ="";

    productos.forEach(producto =>{

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="imagen-producto" src="${producto.imagen}" alt="" height="350px" >
            <div class="detalles-producto">
                <h3 class="titulo-producto">${producto.titulo} </h3>
                <p class="precio-producto">$${producto.precio}</p>
                <button class="agregar-producto">Agregar</button>
        </div>
        `;
        contenedorProductos.append(div)

    })
}
cargarProductos(productos)

botonesCategoria.forEach(boton =>{
    boton.addEventListener("click", (e)=> {

        botonesCategoria.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");


        const productosfiltrados = productos.filter(producto => producto.catergoria.id === e.currentTarget.id);
        
        cargarProductos(productosfiltrados)

    })



})





const contenedorCarrito = document.getElementById("carrito");
let precioTotal = document.getElementById("precioTotal");
let carrito = [];

//TRAER DATOS DE LOCALSTORAGE
const savedDataParse = JSON.parse(localStorage.getItem("carritoSesion"));
/* const savedPrecioTotal = localStorage.getItem("precioTotalLS"); */

savedDataParse != null &&
    savedDataParse.forEach((prod) => {
        const div = document.createElement("div");
        div.classList = ("productosEnCarrito");
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>$ ${prod.precio}</p>
        <p>${prod.color}</p>
        <img src="./Img/trash-can-regular.svg" onclick = "eliminarDelCarrito(${prod.id})" class="fa-regular fa-trash-can iconoBorrar"></img>`
                
        contenedorCarrito.appendChild(div);
        carrito.push(prod);
        precioTotal.innerHTML = carrito.reduce((acc, prod) => acc + prod.precio, 0);

}) 


const calzados = [
    {
        id: 1,
        nombre: "Nike Air Force 1",
        talles:[39, 40, 41, 42, 43, 44, 45],
        precio: 3990,
        img: "./Img/Calzado/NikeAirForce1.jpg"
    },
    {
        id: 2,
        nombre: "Nike Air Max Sc",
        talle1: "39",
        talle2: "40",
        talle3: "41",
        talle4: "42",
        talle5: "43",
        talle6: "44",
        precio: 4990,
        img: "./Img/Calzado/AirMaxSc.jpg"
    },
    {
        id: 3,
        nombre: "Nike Air Max Excee",
        talle1: "39",
        talle2: "40",
        talle3: "41",
        talle4: "42",
        talle5: "43",
        talle6: "44",
        precio: 6990,
        img: "./Img/Calzado/NikeAirMaxExcee.jpg"
    },
    {
        id: 4,
        nombre: "Nike Air Max Bella TR 4",
        talle1: "39",
        talle2: "40",
        talle3: "41",
        talle4: "42",
        talle5: "43",
        talle6: "44",
        precio: 5990,
        img: "./Img/Calzado/NikeAirMaxBellaTR4.jpg"
    },
    {
        id: 5,
        nombre: "Nike Air Zoom Pegasus 38",
        talle1: "39",
        talle2: "40",
        talle3: "41",
        talle4: "42",
        talle5: "43",
        talle6: "44",
        precio: 4990,
        img: "./Img/Calzado/NikeAirZoomPegasus38.jpg"
    },
    {
        id: 6,
        nombre: "Nike Quest 5",
        talle1: "39",
        talle2: "40",
        talle3: "41",
        talle4: "42",
        talle5: "43",
        talle6: "44",
        precio: 5590,
        img: "./Img/Calzado/NikeQuest5.jpg"
    },
    {
        id: 7,
        nombre: "Nike Max Infinity 2",
        talle1: "39",
        talle2: "40",
        talle3: "41",
        talle4: "42",
        talle5: "43",
        talle6: "44",
        precio: 5990,
        img: "./Img/Calzado/NikeMaxInfinity2.jpg"
    },
    {
        id: 8,
        nombre: "Nike Revolution 5",
        talle1: "39",
        talle2: "40",
        talle3: "41",
        talle4: "42",
        talle5: "43",
        talle6: "44",
        precio: 7990,
        img: "./Img/Calzado/NikeRevolution5.jpg"
    },
    {
        id: 9,
        nombre: "Nike Winflo 8 Premium",
        talle1: "39",
        talle2: "40",
        talle3: "41",
        talle4: "42",
        talle5: "43",
        talle6: "44",
        precio: 6690,
        img: "./Img/Calzado/NikeWinfloo8Premium.jpg"
        },
]

const agregarAlCarrito = (prodId) => {
    const item = calzados.find((prod) => prod.id === prodId);
    carrito.push(item);
    actualizarCarrito();
}

const actualizarCarrito = () => {

    contenedorCarrito.innerHTML = "";
    carrito.forEach((prod) => {
        const div = document.createElement("div");
        div.classList = ("productosEnCarrito");
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>$ ${prod.precio}</p>
        <p>${prod.talle}</p>
        <img src="./Img/trash-can-regular.svg" onclick = "eliminarDelCarrito(${prod.id})" class="fa-regular fa-trash-can iconoBorrar"></img>`
        
        contenedorCarrito.appendChild(div);
    })
    
    localStorage.setItem("carritoSesion", JSON.stringify(carrito));
    precioTotal.innerHTML = carrito.reduce((acc, prod) => acc + prod.precio, 0); 
}

const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId);
    const indice = carrito.indexOf(item);
    carrito.splice(indice, 1);
    actualizarCarrito();
}


calzados.forEach((calzado) => {
    console.log(calzado);
    const card = document.createElement("div");
    card.classList.add("cardProducto");
    card.innerHTML = `
        <img class="imagenProducto" src="${calzado.img}" alt="">
        <div class="nombreYPrecio">
            <h4 class="nombreCalzado"> ${calzado.nombre} </h4>
            <p class="precioCalzado">$ ${calzado.precio}</p>
        </div>
        <div class="talles" id="talles"> 
        ${ 
            calzado.talles.map((tal) => `<button> ${ tal }<button>`)
        }
        </div>
        
         
        <button class="botonAgregarCarrito" id="agregar${calzado.id}"><img src="./Img/shopping-cart.png" alt="agregarAlCarrito"><p>AGREGAR AL CARRITO</p></button>`
    
       

    document.getElementById("catalogoCalzado").append(card);


        const boton = document.getElementById(`agregar${calzado.id}`);
        boton.onclick = () => {
            agregarAlCarrito(calzado.id);

            Toastify({
                text: `Agregaste ${calzado.nombre} al carrito.`,
                className: "toastifyAlert",
                style: {
                  background: "linear-gradient(to right, #000000, #e70000)",
                }
              }).showToast();

        }
})


class Producto{
    constructor(item){
        this.nombre = item.nombre,
        this.precio = item.precio,
        this.img = item.img,
        this.genero = item.genero
        this.edicion = item.edicion
    }
}


const PRODUCTOS = [
new Producto({edicion: "Sustainable Materials", nombre: "Nike air max 90",precio: "130",genero: "Men's Shoes",img: "nikearimax90.jpg"}),
new Producto({edicion: "Just in", nombre: "Nike AF 1/1",precio: "140",genero: "Men's Shoes", img: "NikeAf.jpg"}),
new Producto({edicion: "Coming soon", nombre: "Nike air max 2021",precio: "160",genero: "Men's Shoes", img: "nikearimax2021.jpg"}),
new Producto({edicion: "Coming soon", nombre: "Nike air max 2021",precio: "160",genero: "Men's Shoes", img: "nikearimax2021.jpg"}),
new Producto({edicion: "Coming soon", nombre: "Nike air max 2021",precio: "160",genero: "Men's Shoes", img: "nikearimax2021.jpg"}),
new Producto({edicion: "Coming soon", nombre: "Nike air max 2021",precio: "160",genero: "Men's Shoes", img: "nikearimax2021.jpg"}),
];

let acumulador = "";

PRODUCTOS.forEach((elemento)=>{
acumulador += `
<div class="col">
      <div class="card h-100">
        <img src="../img/${elemento.img} " class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${elemento.edicion} </h5>
          <p class="card-text-producto"> ${elemento.nombre} </p>
          <div class="card-text-genero">${elemento.genero} </div>
          <p class="card-text-precio"> $${elemento.precio}</p>
        </div>
      </div>
    </div>
`

})

const contenedor = document.getElementById("content");
contenedor.innerHTML = acumulador
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
new Producto({edicion: "Just in", nombre: "Nike AF 1/1",precio: "140",genero: "women's Shoes", img: "NikeAf.jpg"}),
new Producto({edicion: "Coming soon", nombre: "Nike air max",precio: "160",genero: "Men's Shoes", img: "nikearimax2021.jpg"}),
new Producto({edicion: "Coming soon", nombre: "Nike air max",precio: "160",genero: "Men's Shoes", img: "nikearimax2021.jpg"}),
new Producto({edicion: "Coming soon", nombre: "Nike air max",precio: "160",genero: "Men's Shoes", img: "nikearimax2021.jpg"}),
new Producto({edicion: "Coming soon", nombre: "Nike air max",precio: "160",genero: "Men's Shoes", img: "nikearimax2021.jpg"})];
;

let acumulador = "";

PRODUCTOS.forEach((elemento)=>{
acumulador += `
<div class="item">
<img id="productos" src="./assets/img/${elemento.img} " alt="#">
      <div>
      <h5 class="card-title">${elemento.edicion} </h5>

      </div>
    <div class="articleinfo">
      <h5 class="itemtitle">${elemento.nombre}</h5>
      <h5 class="itemprecio">$${elemento.precio}</h5>
    </div>  
      <p class="articlegenero">${elemento.genero}</p>
  </div>
`

})

const contenedor = document.getElementById("contenido");
contenedor.innerHTML = acumulador
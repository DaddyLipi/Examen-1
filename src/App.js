const titulo_input = document.querySelector("#titulo");
const detalle_input = document.querySelector("#detalle");
const form = document.querySelector("#funcion-form");
const div =document.querySelector("#post");

form.addEventListener("submit",(event)=>{

    event.preventDefault();
    const Titulo = titulo_input.value;
    const Detalle = detalle_input.value;
    div.innerHTML = "<p> Titulo: "+ Titulo + "\n"+"Descripcion: "+ Detalle +"</p>";
});
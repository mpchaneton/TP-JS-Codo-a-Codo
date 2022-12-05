/* let nombreUsuario = "Paula"
console.log(nombreUsuario)*/

function totalAPagar(cantTickets,categoria){
const valorTicket = 200
let valorSinDescuento = cantTickets * valorTicket;

switch (categoria){
    case "Estudiante":
        totalAPagar= (valorSinDescuento * 0.20)
        break;
    case "Trainee":
        totalAPagar= (valorSinDescuento * 0.50)
        break;
    case "Junior":
        totalAPagar= (valorSinDescuento * 0.85)
        break;
}
return totalAPagar

}
let boton = document.getElementById("liveAlertBtn")
boton.addEventListener("click",()=>{
    let cantidad = document.getElementById("cant").value
    let categoria = document.getElementById("categoria").value

    let valor= totalAPagar (cantidad,categoria)

    let divMensaje = document.getElementById("aPagar")
    divMensaje.textContent = valor
}
)
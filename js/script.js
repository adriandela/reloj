let hora = document.getElementById("contenedorhora");
let segundos = document.getElementById("contenedorsegundos");
let dia = document.getElementById("display");
const saludo = () => {
    let d = new Date();
    if (d.getMinutes()<10) {
        hora.innerHTML="<p class='hora' id='hora'>"+d.getHours()+":0"+d.getMinutes()+"</p>";
    } else{
        hora.innerHTML="<p class='hora' id='hora'>"+d.getHours()+":"+d.getMinutes()+"</p>";
    }
    if (d.getSeconds()<10) {
        segundos.innerHTML="<p class='segundos'>0"+d.getSeconds()+"</p>";
    } else{
        segundos.innerHTML="<p class='segundos'>"+d.getSeconds()+"</p>";
    }
    dia.innerHTML="<p id='blanco' class='blanco'>"+(d.getDay()+1)+"/"+(d.getMonth()+1)+"/"+d.getFullYear()+"</p>";
}
setInterval(saludo, 1000);
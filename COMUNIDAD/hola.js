/* alert("hola mundo"); */
/* console.log("saludo");
let arr=["uno","dos","tres"]

let obj={
    "nombre":"pepito",
    "edad":"14",
    "estado":"soltero",
}

function agregar(item){
    arr.push(item)
    console.log(arr);
}

let nuevo=prompt("Ingresa un nuevo item")
agregar(nuevo) */

const $btn=document.getElementById("btn");
//const $btn=document.querySelector("#btn");
$btn.addEventListener("click", saludo);
/* Para al darle click va aparecer Hola gnte
function saludo() {
    alert("Hola Gente")
} */
function saludo() {
    const conf=confirm("Seguro que quiere salir")
    if(conf){
        window.close()
    }
}

const $email=document.getElementById("email");
const $pass=document.getElementById("pass");

let correo
let pass

$email.addEventListener("keyup", (e)=>{
    correo=$email.value
    console.log(correo);
})

$pass.addEventListener("keyup", (e)=>{
    pass=$pass.value
    console.log(pass);
})
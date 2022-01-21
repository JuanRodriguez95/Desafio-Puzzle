let letras = document.getElementById("txt_letras");
let numeros = document.getElementById("txt_numeros");

let btn_a1= document.getElementById("btn_a1");
let btn_b2= document.getElementById("btn_b2");
let btn_c3= document.getElementById("btn_c3");
let btn_d4= document.getElementById("btn_d4");
let btn_e5= document.getElementById("btn_e5");
let btn_f6= document.getElementById("btn_f6");
let btn_g7= document.getElementById("btn_g7");
let btn_h8= document.getElementById("btn_h8");
let btn_i9= document.getElementById("btn_i9");
let btn_j0= document.getElementById("btn_j0");

let arrayLetras = [];
let arrayNumeros = [];

const arrayLetrasGuia = ['A','B','C','D','E','F','G','H','I','J'];
const arrayNumerosGuia = [1,2,3,4,5,6,7,8,9,0];

const pintarArrays = () => {
    letras.innerHTML = "Letras : "+arrayLetras;
    numeros.innerHTML= "Numeros :"+arrayNumeros;
}
     //   alert('Las letras y numeros deben ser ingresadas en orden');

const ejecucion = (letra,numero) => {
    if(arrayLetras.length<=9){
        if(letra==arrayLetrasGuia[arrayLetras.length]){
            arrayLetras.push(letra);
            pintarArrays();
        }else{
            alert('Las letras deben ser ingresadas en orden');
        }
    }else{
        if(numero==arrayNumerosGuia[arrayNumeros.length]){
            arrayNumeros.push(numero);
            pintarArrays();
        }else{
            alert('Los numeros deben ser ingresados en orden');
        }
    }
}

/** 
const ejecucionA1 = () =>{
    if(arrayLetras.length<=9){
        if("A"==arrayLetrasGuia[arrayLetras.length]){
            arrayLetras.push("A");
            pintarArrays();
        }else{
            alert('Las letras deben ser ingresadas en orden');
        }
    }else{
        if(1==arrayNumerosGuia[arrayNumeros.length]){
            arrayNumeros.push(1);
            pintarArrays();
        }else{
            alert('Los numeros deben ser ingresados en orden');
        }
    }
}

const ejecucionB2 = () =>{
    console.log('entre a al b2');

    if(arrayLetras.length<=9){
        if("B"==arrayLetrasGuia[arrayLetras.length]){
            console.log('entre a al if');
            arrayLetras.push("B");
            pintarArrays();
        }else{
            alert('Las letras deben ser ingresadas en orden');
        }
    }else{
        if(2==arrayNumerosGuia[arrayNumeros.length]){
            arrayNumeros.push(2);
            pintarArrays();
        }else{
            alert('Los numeros deben ser ingresados en orden');
        }
    }
}

const ejecucionC3= () =>{
    if(arrayLetras.length<=9){
        if("C"==arrayLetrasGuia[arrayLetras.length]){
            arrayLetras.push("C");
            pintarArrays();
        }else{
            alert('Las letras deben ser ingresadas en orden');
        }
    }else{
        if(3==arrayNumerosGuia[arrayNumeros.length]){
            arrayNumeros.push(3);
            pintarArrays();
        }else{
            alert('Los numeros deben ser ingresados en orden');
        }
    }
}


*/
btn_a1.onclick = () =>{
    ejecucion("A",1);
}

btn_b2.onclick = () =>{
    ejecucion("B",2);
}

btn_c3.onclick = () =>{
    ejecucion("C",3);
}

btn_d4.onclick = () =>{
    ejecucion("D",4);
}

btn_e5.onclick = () =>{
    ejecucion("E",5);
}

btn_f6.onclick = () =>{
    ejecucion("F",6);
}

btn_g7.onclick = () =>{
    ejecucion("G",7);
}

btn_h8.onclick = () =>{
    ejecucion("H",8);
}

btn_i9.onclick = () =>{
    ejecucion("I",9);
}

btn_j0.onclick = () =>{
    ejecucion("J",0);
}


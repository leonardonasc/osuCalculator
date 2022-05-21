var capturando = 0;

function capturar(){
    
    capturando = document.getElementById('valorAR').value;
    if(capturando < 5 || capturando > 10){
        alert("O AR não deve ser menor que 5 e nem maior que 10")
    }else{
    //multiply by 2, add 13, divide by 3
    conta = (capturando*2+13)/3
    resultado = (Math.floor(conta* 100)/100).toFixed(1);
    format = "AR = "+capturando+"<br>"+"AR + DT = "+ resultado;
    document.getElementById('resultado').innerHTML = format;
    }
}










// const btn = document.querySelector("#send");

// btn.addEventListener("click", function(e){

//     e.preventDefault();

//     const name = document.querySelector("#valorAR");

//     const value = name.value;

//     console.log(value);
// });

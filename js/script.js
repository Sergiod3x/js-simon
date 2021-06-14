var flag = 0 ;
var min = 0;
var max = 100;
var userFiveList = [];
var secondi = 5;
var output=document.getElementById("out");
var fiveList = randomList(max, 5);
alert(fiveList[0]+ " " + fiveList[1] + " " + fiveList[2] + " " + fiveList[3]+ " " + fiveList[4])


var intervallo = setInterval(function () {
        output.innerText = secondi;
        secondi--;
    }, 1000);
    
    setTimeout(function(){
        clearInterval(intervallo);
        userFiveList[0]= insertMaxNumber("Inserisci uno dei numeri", max , min);
        userFiveList[1]= insertMaxNumber("Inserisci uno dei numeri", max , min);
        userFiveList[2]= insertMaxNumber("Inserisci uno dei numeri", max , min);
        userFiveList[3]= insertMaxNumber("Inserisci uno dei numeri", max , min);
        userFiveList[4]= insertMaxNumber("Inserisci uno dei numeri", max , min);

        for(var i = 0 ; i<userFiveList.length; i++){
            if (isInArray(fiveList,userFiveList[i])){
                flag++;
            } else{
                break
            }
        }
        if (flag ===5){ 
            output.innerText = "Hai indovinato tutte le parole!";
        } else{
            output.innerText = "Hai indovinato solamente " + flag + " parole";
        }


    },(secondi+1) * 1000);











//Funzione che dato in ingresso un array e un elemento, verifica se l'elelmento è presente all'interno dell'array
function isInArray(array, element) {
  for ( var x = 0 ; x < array.length ; x++){
    if(element === array[x]){
      return true;
    }
  }
  return false;
}



//Funzione che dato un messaggio in ingresso, restituisce il numero inserito dall'utente se e solo se è un numero, 
//e se e solo se rientra nel range min max, altrimenti ripete la richiesta
function insertMaxNumber(message, max , min){
  var num = parseInt(prompt(message));
  while(isNaN(num)|| num > max || num < min){
      var num = parseInt(prompt("Attenzione il valore deve essere numerico e rientrare nel range "+ min+"-"+max));
  }
  return num;
}



//Popolo un array con n elementi unici da uno a rangePop
function randomList(rangePop, n){
    var lista =[];
    while(lista.length < n){
      var randNum = getRandomNumber(rangePop);
      if(!(isInArray(lista, randNum))){
        lista.push(randNum);
      }
    }
    return lista;
  }



//Funzione che resistuisce un numero random tra 1 e max
function getRandomNumber(max){
    return (Math.floor(Math.random() * (max ))+1);
  }




//Funzione che dato in ingresso un array e un elemento, verifica se l'elelmento è presente all'interno dell'array
function isInArray(array, element) {
    for ( var x = 0 ; x < array.length ; x++){
      if(element === array[x]){
        return true;
      }
    }
    return false;
  }




























// var output=document.getElementById("out");
// var secondi = parseInt(prompt("Inserisci il numero di secondi per il  timer"));

// // Prima maiuscola e il resto minuscolo



// var intervallo = setInterval(function () {
//     output.innerText = secondi;
//     secondi--;
// }, 1000);

// setTimeout(function(){
//     clearInterval(intervallo);
//     output.innerText = "DRIIIIN";
// },(secondi+1) * 1000);




// document.addEventListener('DOMContentLoaded', function(){
//     var seconds = parseInt(prompt("Inserisci il numero di secondi per il  timer"));
//     var outputContdown = document.querySelector ("#out");
//     var clock = setInterval ( function(){
//         outputContdown.innerText = seconds;

//         if (seconds === 0) {
//             outputContdown.innerText = "DRIIIN";
//             clearInterval(clock);
//         }else{
//             seconds--;
        
//         }
//     },1000)
// })
<?php
//Resolucion del ejercicio utilizando recursividad
function countBits($n) {
    if($n==0) {
        return 0;
    }else{
        if($n%2!=0){ // Si el resto de  dividir por dos es distinto de cero (n es impar), esto significa que el bit menos significativo es igual a 1
        return 1 + countBits($n/2);
        }else{ //El numero es par (bit menos significativo igual a cero)
        return countBits($n/2);    
        } 
    }
}

    
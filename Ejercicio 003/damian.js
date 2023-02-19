var countBits = function(n) {
  // Inicializamos las variables
  var max_pot =0; // Indica el valor máximo del exponente
  var cant_unos=0; // Indica la cantidad de unos que posee el codigo binario   
  while (n!=0){
      while(true){ //busca la potencia de 2 más grande que podamos restar del numero
        if(n - 2**(max_pot+1) >= 0){
          max_pot ++
        }else{
          break
        }
      }
      n=n-(2**max_pot) //restamos la potencia que encontramos, y asignamos la diferencia a n
      max_pot =0        //restablecemos el valor de la potencia
      cant_unos ++    //sumamos un uno al contador
    }
    return cant_unos
  };
  

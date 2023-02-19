//Resolucion del ejercicio operando a nivel de bits
#include <stddef.h> //incluye la libreria

size_t countBits(unsigned value){
  int bits_uno =0; //inicializamos la variable para contar unos
  while(value | 0 != 0){ //La condicion evalúa si el valor binario de value esta compuesto solo por ceros
    if (value & 1 == 1){  //La condicion evalúa si el bit menos significatio de value es igual a uno
      bits_uno ++;  //incrementa en uno nuestro contador
    }
    value = value>>1; //Desplazamos el cursor un valor a la derecha (por ej pasa de 0111 a 0011; de 0100 a 0010, etc)
  }
	return bits_uno;
}
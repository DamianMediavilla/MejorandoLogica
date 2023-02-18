# Ejercicio 002
En esta ocasión decidimos realizar el kata de CodeWars, el cual consiste en la traduccion de un mensaje en Morse.

[CodeWars - Morse](https://www.codewars.com/kata/54b724efac3d5402db00065e)

Transcripcion del problema:
>In this kata you have to write a simple Morse code decoder. While the Morse code is now mostly superseded by voice and digital data communication channels, it still has its use in some applications around the world.
The Morse code encodes every character as a sequence of "dots" and "dashes". For example, the letter A is coded as ·−, letter Q is coded as −−·−, and digit 1 is coded as ·−−−−. The Morse code is case-insensitive, traditionally capital letters are used. When the message is written in Morse code, a single space is used to separate the character codes and 3 spaces are used to separate words. For example, the message HEY JUDE in Morse code is ···· · −·−−   ·−−− ··− −·· ·.

Este problema cuenta con tres nivekes de dificultad. Este primer kata, comprende solo la decodificacion del mensaje recibido como parámetro de una funcion, donde la cadena esta compuesta por caracteres `-` `·` y ` ` (*punto medio*, *guión*, *espacio*). 

Más adelante podríamos reutilizar el codigo escrito para  continuar los niveles 2 y 3 del kata, que consideran el ingreso del codigo Morse con diferentes variantes. El nivel 2, como una secuencia de bits Ej.: "11001100110011000000"; y el nivel 3 con la complejidad adicional de que el codigo ingresado simula el ingreso manual de un operador humano, suceptible variaciones en la velocidad de transmision, por lo que en diferentes mensajes puede percibirse el codigo `1111` tanto como `·` o `-` segun la ocasión.


[Volver al índice](../README.md)

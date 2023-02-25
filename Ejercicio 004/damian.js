/* Para probar
* https://www.programiz.com/javascript/online-compiler/
*/


/*Primero declaramos una función para dibujar nuestro triangulo base.
* Por cada línea, imprimimos tantas letras "L " (con un espacio) como numero de linea es:
* Primer línea una "L", segunda línea dos, tercera línea tres...
*/

function triangulo(n) {
      for(i=0; i<n;i++){
          line=[]
        for(j=0;j<i+1;j++){
            line.push("L ")
        }
        console.log(line.join(""))
      }
    }

triangulo(3)

/* Luego transformamos la función para trabajar con cuadrados de 2. 
* Como vemos en CodeWars, al ingresar "0" se imprimer una línea.
* Al ingresar "1" se imprimen dos líneas.
* Al ingresar "2" se imprimen cuatro líneas.
* Al ingresar "3" se imprimen ocho líneas.
*/

function triangulo2(n) {
    // TODO: Program me
      for(i=0; i<(2**n);i++){
          line=[]
        for(j=0;j<i+1;j++){
            line.push("L ")
        }
        console.log(line.join(""))
      }
    }
triangulo2(3)

/* Forma que imprime indices
*/
function triangulo2ind(n) {
    // TODO: Program me
      for(i=0; i<(2**n);i++){
          line=[]
        for(j=0;j<i+1;j++){
            line.push(i+1)
            line.push(j+1)
            line.push(" ")
        }
        console.log(line.join(""))
      }
    }
triangulo2ind(3)

/*
00 
10 11 
20 21 22 
30 31 32 33 
40 41 42 43 44 
50 51 52 53 54 55 
60 61 62 63 64 65 66 
70 71 72 73 74 75 76 77 
00 
10 11 
20    22 
30 31 32 33 
40          44 
50 51       54 55 
60    62    64    66 
70 71 72 73 74 75 76 77 
-- 
-- -- 
-- 32 -- 
-- -- -- -- 
-- 52 53 54 -- 
-- -- 63 64 -- -- 
-- 72 -- 74 -- 77 -- 
-- -- -- -- -- -- -- 

*/

/*
11 
21 22 
31 32 33 
41 42 43 44 
51 52 53 54 55 
61 62 63 64 65 66 
71 72 73 74 75 76 77 
81 82 83 84 85 86 87 88 
11 
21 22 
31 -- 33 
41 42 43 44 
51 -- -- -- 55 
61 62 -- -- 65 66 
71 -- 73 -- 75 -- 77 
81 82 83 84 85 86 87 88 

*/
function triangulo2cond(n) {
    // TODO: Program me
      for(i=0; i<(2**n);i++){
          line=[]
        for(j=0;j<i+1;j++){
            if(i==j | i==1 | j==(2**n)){
                line.push("L ")
            }else{
                line.push("  ")
            }
        }
        console.log(line.join(""))
      }
    }
triangulo2cond(3)
/*
11 
21 22 
31    33 
41       44 
51          55 
61             66 
71                77 
81 82 83 84 85 86 87 88 
 
 if(i==j | j+1==1 | Number.isInteger(Math.log2(i+1)))
 11 
21 22 
31    33 
41 42 43 44 
51          55 
61             66 
71                77 
81 82 83 84 85 86 87 88 
------
 if (Number.isInteger(Math.log2(i+1))) k=i+1

 if(i==j | j+1==1 | Number.isInteger(Math.log2(i+1)) | ((i+1)-k)==j+1)
11 
21 22 
31    33 
41 42 43 44 
51          55 
61 62          66 
71    73          77 
81 82 83 84 85 86 87 88 
91                      99 
101 102                      1010 
111    113                      1111 
121       124                      1212 
131          135                      1313 
141             146                      1414 
151                157                      1515 
161 162 163 164 165 166 167 168 169 1610 1611 1612 1613 1614 1615 1616

 if(i==j | j+1==1 | Number.isInteger(Math.log2(i+1)) | ((i+1)-k)==j+1 | (k)==j){
    11 
21 22 
31    33 
41 42 43 44 
51          55 
61 62       65 66 
71    73    75    77 
81 82 83 84 85 86 87 88 
91                      99 
101 102                   109 1010 
111    113                119    1111 
121       124             129       1212 
131          135          139          1313 
141             146       149             1414 
151                157    159                1515 
161 162 163 164 165 166 167 168 169 1610 1611 1612 1613 1614 1615 1616 
171                                              1717 
181 182                                           1817 1818 
191    193                                        1917    1919 
201       204                                     2017       2020 
211          215                                  2117          2121 
221             226                               2217             2222 
231                237                            2317                2323 
241                   248                         2417                   2424 
251                      259                      2517                      2525 
261                         2610                   2617                         2626 
271                            2711                2717                            2727 
281                               2812             2817                               2828 
291                                  2913          2917                                  2929 
301                                     3014       3017                                     3030 
311                                        3115    3117                                        3131 
321 322 323 324 325 326 327 328 329 3210 3211 3212 3213 3214 3215 3216 3217 3218 3219 3220 3221 3222 3223 3224 3225 3226 3227 3228 3229 3230 3231 3232 
todos uno dos tres cuatro
*/
function sierpinski(n) {
    // TODO: Program me
      
      for(i=1; i<=(2**n);i++){
          line=[]
        for(j=1;j<=i;j++){
            if (Number.isInteger(Math.log2(i))) k=i
            if(i==j | j==1 | Number.isInteger(Math.log2(i)) | ((i)-k)==j | (k)==j | ((j)==2 & (i)%(j)==0) ){
                line.push("*")
                line.push(" ")
            }else{
                line.push("  ")
            }
          
          
        }
        console.log(line.join(""))
      }
    }
    
    sierpinski(5)



function sierpinski(n) {
    // TODO: Program me
      
      for(i=1; i<=(2**n);i++){
          line=[]
        for(j=1;j<=i;j++){
            if (Number.isInteger(Math.log2(i))) k=i
            if(i==j | j==1 | Number.isInteger(Math.log2(i)) | ((i)-k)==j   ){
                line.push(i)
                line.push(j)
                line.push(" ")
            }else{
                line.push("  ")
            }
          
          
        }
        console.log(line.join(""))
      }
    }
    
    sierpinski(5)
    
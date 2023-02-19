morseCode = '    .... . -.--   .--- ..- -.. .'
decodeMorse = function(morseCode){
    // Your code here
    // You can use MORSE_CODE[morse]
    const mensajeMorseArray = []
    mensajeMorse = morseCode.trim().split("   ");
    mensajeMorse.forEach((palabraMorse)=>{
      palabraMorseArray = palabraMorse.split(" ")
      mensajeMorseArray.push(palabraMorseArray)
    
    })
  
    
    let mensaje =[]
    mensajeMorseArray.forEach((palabraMorseArray)=>{
      let palabra =[]
      palabraMorseArray.forEach((letraMorse)=>{
        
        letra = MORSE_CODE[letraMorse]
        palabra.push(letra)
      })
      mensaje.push(palabra)
    })
    
    let mensajeS = ' '
    mensaje.forEach((palabra)=>{
      palabraS =''
       palabra.forEach((letra)=>{
         palabraS = palabraS + letra
         })
      mensajeS = mensajeS + palabraS + ' '
      
    })
    console.log(`${mensajeS.trim().toString()}`)
    return mensajeS.trim().toString()
    
  }
  function sierpinski(n){
    triangulo  = []
    
    for(i=(2**n); i>0;i--){
        line=[]
      for(j=i;j>0;j--){
          line.push("  ")

      }
      triangulo.push(line)
    }
    
    triangulo.reverse()
    exp=2**3
    if (n<3) exp=2**n
    for(i=0; i<(exp);i++){ 
        for(j=0;j<i+1;j++){
          if (Number.isInteger(Math.log2(i+1))) c=i+1
  
          if(i==j | j+1==1 | Number.isInteger(Math.log2(i+1)) | ((i+1)-c)==j+1 | c==j ){
            triangulo[i].splice(j,1, "L ")
          }
        }
        
    }

    r=8
    while (triangulo.length>r) {
      
      for(i=0; i<(r);i++){ 
          for(j=0;j<i+1;j++){
            triangulo[i+r].splice(j,1, triangulo[i][j])
            triangulo[i+r].splice(j+r,1, triangulo[i][j])
          }
        }
      r*=2
    }
    texto=''
    triangulo.forEach(line => {
        console.log(line.join(""))
        texto+= line.join("").trim()
        texto+= '\n'
        
    })
    return texto.trim()


}
sierpinski(0)
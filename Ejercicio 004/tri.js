function triangulo2(n, pos=[0,0]) {
    // TODO: Program me
    tri = []
    
      for(i=(2**n); i>0;i--){
          line=[]
        for(j=i;j>0;j--){
            line.push("  ")

        }
        tri.push(line)
      }
    return tri
}
function indexer(trian=[]){
    n=8
    replace([0,0])
    while (trian.length>n) {
      copy(n)
      n*=2
    }
    
}
array_triangulo=triangulo2(6)

function replace(pos=[0,0]){
    //reemplaza triangulos de 8*8
    k=pos[0]
    l=pos[1]      
    array_triangulo.reverse()
    for(i=0; i<(2**3);i++){ 
      for(j=0;j<i+1;j++){
        if (Number.isInteger(Math.log2(i+1))) c=i+1

        if(i==j | j+1==1 | Number.isInteger(Math.log2(i+1)) | ((i+1)-c)==j+1 | c==j ){
          array_triangulo[i+k].splice(j+l,1, "L ")
        }
      }
      
    }
}
function copy(n){
  for(i=0; i<(n);i++){ 
    for(j=0;j<i+1;j++){
      array_triangulo[i+n].splice(j,1, array_triangulo[i][j])
      array_triangulo[i+n].splice(j+n,1, array_triangulo[i][j])
    }
  }
}
indexer(array_triangulo)

array_triangulo.forEach(line => {
  console.log(line.join(""))
  
});



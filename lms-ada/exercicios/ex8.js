function numeroPrimo(numero) {
    if (numero <=1) {
       return false;
    }
    
    for (let i = 2; i < numero; i++) {
       if (numero % i === 0) {
          return false
       }
    }
    return true;
 }
 
 const numero = 37
 
 console.log(numeroPrimo(numero));
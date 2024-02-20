// function contagemRegressiva(n){
//     while(n >=0){
//         if (n === 0){
//             console.log("Kaboom!!")
//         }else{
//             console.log(n)
//         }
//         n--;
        
//     }
// }

contagemRegressiva()

//recursividade

function contagemRegressiva(n){
    if(n ===0){
        console.log("Kaboom!")
    }else{
        console.log(n)
        contagemRegressiva(n - 1)
    }
}
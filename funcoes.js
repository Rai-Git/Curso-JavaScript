function soma(n1, n2){
    console.log(n1 + n2)
}
soma(20,10)

/**função anonima */ 
const y = function(n1, n2){
    console.log(n1 - n2)
}
y(20,10)

//arrow function
const x = (n1, n2) => {console.log(n1 * n2)}
x(20,10)

//função arrow com retorno implicito
const z = (n1,n2) => n1 + n2
console.log(z(20,10))
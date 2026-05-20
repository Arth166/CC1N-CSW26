var issoeumastring = 'isso e uma string';
var issoeumnumero = 4;
const issoeumbooleano = true;
var issotambemeumastring = '4';
var issotambemeumnumero = 5;

console.log(issoeumastring == issoeumnumero);
console.log(issoeumnumero == issotambemeumastring);
console.log(issoeumnumero === issotambemeumastring);
console.log(typeof issoeumnumero === typeof issotambemeumnumero);

for(let i = 0; i <= 10; i += 2){
    console.log(i)
}

let j = 0; 
while (j <= 10){
if (j % 2 !== 0) {
    console.log(j);
}
j += 1     
}    
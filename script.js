// // // let value = 1;

// // // function MyFunction(param) {
// // //     param++; 
// // //     console.log(`Valoarea lui param este ${param}`); 
// // // }

// // // MyFunction(value);

// // // console.log(`Valoarea lui value este ${value}`);




// // exercitiu 1 functie simpla de adunare

// // function add(a, b) {
// //     return a + b;
// // }

// // let sum = add(3, 4);
// // console.log(`Suma este: ${sum}`); // Suma este: 7





// function isEven(number) {
//     return number % 2 === 0;
// }

// // testing function 
// let check=isEven(5);
// console.log(`Numărul 5 este par: ${check}`) // numarul 5 este par: false






// function greet(name) {
//     return '`Salut, ${name}';
// }


// let greeting=greet("Maria");
// console.log(greeting);






// function factorial (n) {

// if (n===0) {
//     return 1;

// }
// return n* factorial(n-1);

// }


// let result=factorial(5);
// console.log(`Factorialul lui 5 este: ${result}`);

    



function isNameInList(name, nameList) {
    return nameList.includes(name);
}

// testeaza functia 
let names=["Ana", "Mihai", "Alex", "Marius"];
let nameCheck = isNameInList("Alex", names);
console.log(`Alex este în listă: ${nameCheck}`); // Alex este în listă: true
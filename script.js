// let person = {
//     firstName: "Alex",
//     lastName: "Pop",
//     age: 40,
//     sayHello: function() {
//         console.log(`Salut, numele meu este ${this.firstName} ${this.lastName}.`);
//     }
// };

// let person2 = {
//     firstName: "Mircea",
//     lastName: "rares",
//     age: 50,
    
// };
// console.log(person.firstName);
// person.sayHello();
// person2.sayHello();

class Person {
    // Proprietăți private
    #firstName;
    #lastName;
    #age;

    // Constructor
    constructor(firstName, lastName, age) {
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#age = age;
    }

    // Metodă pentru a saluta
    sayHello() {
        console.log(`Salut, numele meu este ${this.#firstName} ${this.#lastName}.`);
    }

    // Getter pentru firstName
    get firstName() {
        return this.#firstName;
    }

    // Setter pentru firstName
    set firstName(newFirstName) {
        this.#firstName = newFirstName;
    }
}


let p = new Person('Mihai', 'Ionescu', 30);
console.log(p.firstName); 
p.firstName = "Ana"; 
console.log(p.firstName); 

let p2 = new Person('Mihai', 'Rares', 45);
console.log(p2.firstName); 
p2.sayHello(); 







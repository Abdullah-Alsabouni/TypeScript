// explicit types
let char: string;
let age: number;


// Arrays

// let ninjas: string[]; // Array'in boş olduğunu tanımlamazsak push metodunu kullanırken hata alırız
let ninjas: string[] = []; 

ninjas.push('abdullah');

// union type

let mixed: (string|number|boolean)[] = []; 
mixed.push('hello');
mixed.push(20);
mixed.push(false);

let uid: string|number;
uid = 123;
uid = '123';

// objects
let ninjaOne: object;
ninjaOne = { name: 'abdullah', age: 22};
// ninjaOne = []; // Doğru hata vermez

let ninjaTwo: {
    name: string,
    age: number,
    beltColour: string
}

ninjaTwo = {
    name: 'mario',
    age: 30,
    beltColour: 'black'
}
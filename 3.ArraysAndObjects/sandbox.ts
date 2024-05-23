// Arrays

let names = ["Abdullah", "Mario", "yoshi"];

names.push("toad");
// names.push(2); // Hata verir

// names[0] = 4; // Hata verir

let numbers = [10, 20, 30, 40];

numbers.push(25); // Doğru
// numbers.push("Shaun"); // Hata verir

let mixed = ['ken', 4, 'chun-li', 8, 9, true];

mixed.push("ryu"); // Doğru
mixed.push(10); // Doğru
mixed[0] = 3; // Doğru

// Objects

let ninja = {
    name: 'Abdullah',
    belt: 'black',
    age: 22
};

ninja.age = 40;
ninja.name = 'ryu';
// ninja.age = '30'; // Hata verir

ninja = { // Objenin güncellenmesi
    name: 'yoshi',
    belt: 'orange',
    age: 50 // 3 özellikten biri olmasaydı hata verirdi
    // skills: 'football'  // extra özellik ekelenmez
}

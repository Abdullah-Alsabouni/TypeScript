// let greet = () => { // Fonksiyon tanımlaması
//     console.log('hello world');
// }

let greet: Function;

greet = () => {
    console.log('Hello Again');
}

const add = (a: number, b: number, c?: number | string) => { // Fonksiyonu çağırıken c'ye değer atamak isteğe bağlı
    console.log(a + b); 
    console.log(c); 
}

add(5, 10);  


const minus = (a: number, b: number) => {
    return a + b;
}

let result = minus(10, 7);

console.log(result); // 17
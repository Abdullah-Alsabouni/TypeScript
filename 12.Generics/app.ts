const addUID = <T extends {name: string}>(obj: T) => { // name: string özelliği olan objeleri çağırılabilir
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
}

let docOne = addUID({name: 'yoshi', age: 40});
// let docTwo = addUID('hello'); // addUID = <T extends object>(obj: T) ==> sadece object ile çağırılabilir, Hata verirdi


interface Resource<T> {
    uid: number;
    recourceName: string;
    data: T;
}

const docThree: Resource<string> = {
    uid: 1,
    recourceName: 'person',
    data:  'shaun'  
}

const docFour: Resource<string[]> = {
    uid: 2,
    recourceName: "shoppingList",
    data: ['test']  
}
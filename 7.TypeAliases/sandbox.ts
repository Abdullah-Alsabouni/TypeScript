
type StringOrNum = string | number
type objWithName = { name: string, uid: StringOrNum}

const logDetails = (uid: StringOrNum, item: string) => { // uid: string | number yazmak yerine StringOrNum yazıldı
    console.log(`${item} has a uid of ${uid}`)
}

const greet = (user: objWithName) => { // user : {name: string, uid: string | number} yerine çok daha bir pratik bir yol kullanıldı
    console.log();
}

enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON}


interface Resource<T> {
    uid: number;
    recourceName: ResourceType;
    data: T;
}

const docThree: Resource<string> = {
    uid: 1,
    recourceName: ResourceType.BOOK, // BOOK = 1
    data:  'shaun'  
}

const docFour: Resource<string[]> = {
    uid: 2,
    recourceName: ResourceType.DIRECTOR, // DIRECTOR = 3
    data: ['test']  
}
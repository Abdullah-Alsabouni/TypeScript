class Invoice {
    client: string;
    details: string;
    amount: number;

    constructor(c: string, d: string, a: number) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }

    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }

}

const invOne = new Invoice('Abdulah', 'Work in the OpenAI', 10000000);
const invTwo = new Invoice('luigi', 'Work in the luigi web site', 1000);

console.log(invOne, invTwo); 
// Invoice {client: 'Abdullah', detail: 'Work in the OpenAI', amount: 10000000}
// Invoice {client: 'luigi', detail: 'Work in the luigi website', amount: 100}

let Invoices: Invoice[] = [];
Invoices.push(invOne);
Invoices.push(invTwo);
console.log(Invoices);

invTwo.client = "mario"; // Sınıfın elemanları güncellenebilir
invTwo.amount = 1100;
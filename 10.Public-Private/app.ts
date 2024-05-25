class Invoice {
    // readonly client: string; // readonly: public gibi kullanılır. fakat değerini değiştiremiyoruz
    // private details: string; // private elemanların sadece sınıfın içinden çağırıp veya erişebiliyoruz
    // amount: number; // varsayılan özelliği public

    constructor(
        readonly client: string, // constuctor içinde yazılan parametlerin tipi public private readonly tiplerini yazmak lazım
        private details: string,
        public amount: number
    ) {}

    format() { 
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }

}

const invOne = new Invoice('Abdulah', 'Work in the OpenAI', 10000000);
const invTwo = new Invoice('luigi', 'Work in the luigi web site', 1000);

invTwo.amount = 2000; // Doğru
// invTwo.client = "Luigi"; // Hata verir, readonly ile tanımlana bir eleman 

let Invoices: Invoice[] = [];
Invoices.push(invOne);
Invoices.push(invTwo);

Invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format()); // inv.detail: Hata verir, inv.format(): hata vermez 
})
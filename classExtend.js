class Publisher{
    constructor(publisher){
        this.publisher = publisher;
    }
}

class Book extends Publisher{
    constructor(bookName, author, price, publisher){
        super(publisher)
        this.bookName = bookName;
        this.author = author;
        this.price = price;
        
        
    }
}

const book1= new Book("habluder jonno programming", "Jhankar Mahbub", 350, "Adorso");

console.log(book1);
// const s1 = 'hello';
// console.log(s1  )

const book1 = {
    title:"Great Gatsby",
    author:"Manqoba Sibeko",
    year: '1993',

    Message: function (){
        return `The book ${this.title}  was written by ${this.author} in ${this.year}`;
    }
}
const book2 = {
    title:"Maru",
    author:"Maru Mokeona",
    year: '1893',

    Message: function (){
        return `The book ${this.title} was written by ${this.author} in ${this.year}`;
    }
}

console.log(book1.Message());
console.log(book2.Message());


//this is the constructor
function BookConstructor (title, author, year){
console.log('intialized');

this.title = title;
this.author = author;
this.year = year;
};

BookConstructor.prototype.Message = function (){
    return `The book ${this.title}  was written by ${this.author} in ${this.year}`;
}
//initiate an Object
const book3 = new BookConstructor ('maru','Mqashiyo Maru','2009');
const bookPrototype = new BookConstructor ('Othello','Shakespear','2019');

console.log(book3 )
console.log(bookPrototype );
console.log(bookPrototype.Message() );

//Inheretence 

function Magazine(title,author,year, month){
    //inherent the book constructor
    BookConstructor.call(this, title ,author, year, month);
}

const mag1 = new Magazine ('Drum','Basetsane khumalo','2008','Sept');

console.log(mag1)

class BookClass{

constructor(title, author, year){
    console.log('intialized');
    
    this.title = title;
    this.author = author;
    this.year = year;
    }
    getSummary(){

    }

}

//Subclass

class Magazine2 extends BookConstructor{
    constructor(title, author,month,year){
        console.log('intialized');

      super(title,author,year)
        }
  
}

const magSubClass = new Magazine2 ('Outliner','Glad Maxweell','April','1980');


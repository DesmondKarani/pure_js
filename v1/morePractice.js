const books = [
  { title: "To Kill a Mockingbird", author: "Harper Lee", pages: 281, genre: "Fiction", rating: 4.27 },
  { title: "1984", author: "George Orwell", pages: 328, genre: "Science Fiction", rating: 4.18 },
  { title: "Pride and Prejudice", author: "Jane Austen", pages: 432, genre: "Romance", rating: 4.25 },
  { title: "The Hobbit", author: "J.R.R. Tolkien", pages: 310, genre: "Fantasy", rating: 4.27 },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", pages: 234, genre: "Fiction", rating: 3.81 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", pages: 180, genre: "Fiction", rating: 3.91 },
  { title: "Moby-Dick", author: "Herman Melville", pages: 585, genre: "Adventure", rating: 3.50 },
  { title: "Jane Eyre", author: "Charlotte Brontë", pages: 532, genre: "Romance", rating: 4.12 }
];

function bookTitles(arr){
  for (holder of arr){
    console.log(holder.title);
  }
}
//bookTitles(books)

function mostPages(rrr){
  let page = 0;
  let kitabu = "";
  for (x of rrr){
    if (x.pages > page){
      kitabu = x;
      page = x.pages;
    }
  }
  return kitabu;
}
//console.log(mostPages(books));

function averageRating(yyy){
  let x = 0;
  let y = 0;
  for (pack of yyy){
    x += pack.rating
    y++;
  }
  return x/y;
}

//console.log(averageRating(books))

function newList(hhh){
  let fictions = [];
  for (xxx of hhh){
    if (xxx.genre === "Fiction")
    fictions.push(xxx);
  }
  return fictions;
}

//console.log(newList(books))

function checkPagesAndRating(kkk){
  let bestBook = "";
  for (book of kkk){
    if (book.pages >= 500 && book.rating >= 4){
      bestBook = book;
      console.log("\ntrue");
      break;
    }
  }
  if (!bestBook){
    console.log("false");
  }
  return bestBook;
}
console.log(checkPagesAndRating(books));

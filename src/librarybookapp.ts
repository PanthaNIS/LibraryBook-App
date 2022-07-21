// Library book app database
interface Book {Isbn: number, Title: string, Author : string, Publisher : string, PublicationDate :string, Pages: number, Avability :string, Edition:string };

let bookData : Book[];
bookData = <[]>[];// initialise the empty array


let position : number = -1;

//Initialise add function
function  doAdd():void

{ 
   // get the input isbn from the form
	document.getElementById("alert").innerHTML =""; 
   let isbnString : string;
   isbnString = (<HTMLInputElement>document.getElementById("isbn")).value;

   let id : number = parseInt(isbnString);// converting to number
   if(isNaN(id)){
   document.getElementById("alert").innerHTML = "ISBN must be entered and must be a number.";
   return;
        }

   // get the input title from the form
   let BTitle :string = (<HTMLInputElement>document.getElementById("title")).value;
   if(BTitle == ""){
   document.getElementById("alert").innerHTML = "Book title must be entered ";
   return;
      }
	// get the input author name from the form
	let BkAuthor :string = (<HTMLInputElement>document.getElementById("author")).value;
   if(BkAuthor == ""){
   document.getElementById("alert").innerHTML = "Author name must be entered ";
   return;
      }
	  
	// get the input publisher name from the form
	let BkPublisher :string = (<HTMLInputElement>document.getElementById("publisher")).value;
   if(BkPublisher == ""){
   document.getElementById("alert").innerHTML = "Publisher name must be entered ";
   return;
      }  
	  
	// get the input publication date from the form  
	let BkPublicationDate :string = (<HTMLInputElement>document.getElementById("publicationDate")).value;
   if(BkPublicationDate == ""){
   document.getElementById("alert").innerHTML = "Publication date must be entered ";
   return;
      }
	 
   // get the input pages from the form
	let pageString : string;
   pageString = (<HTMLInputElement>document.getElementById("page")).value;

   let pgId : number = parseInt(pageString);// converting to number
   if(isNaN(pgId)){
   document.getElementById("alert").innerHTML = "Page must be a number ";
   return;
        }

	// get the input availability from the form	
	let BkAvailability :string = (<HTMLInputElement>document.getElementById("available")).value;
   if(BkAvailability == ""){
   document.getElementById("alert").innerHTML = "Availability Must be entered ";
   return;
      }

   // get the input edition from the form
	let BkEdition :string = (<HTMLInputElement>document.getElementById("edition")).value;
   if(BkEdition == ""){
   document.getElementById("alert").innerHTML = "Edition Must be entered ";
   return;
      }
	  //// Adding to the database
	  bookData[bookData.length] = { Isbn : id, Title: BTitle, Author: BkAuthor, Publisher:BkPublisher, PublicationDate: BkPublicationDate, Pages:pgId, Avability: BkAvailability, Edition:BkEdition };
     document.getElementById("display").innerHTML = JSON.stringify(bookData, null, 4);
      position++; // increment the position
   console.log(bookData);	  
}

// calling the doPrev function to show the all the input value of the previous book.

function doPrev() : void{
    document.getElementById("alert").innerHTML ="";
    if (position <= 0)
    {// check if we are at the begining of the array.
        document.getElementById("alert").innerHTML ="There is no previous book.";
        return;

    }
    position--;
    (<HTMLInputElement>document.getElementById("isbn")).value = "" + bookData[position].Isbn;
    (<HTMLInputElement>document.getElementById("title")).value = bookData[position].Title;
    (<HTMLInputElement>document.getElementById("author")).value = bookData[position].Author;
    (<HTMLInputElement>document.getElementById("publisher")).value = bookData[position].Publisher;
    (<HTMLInputElement>document.getElementById("publicationDate")).value = bookData[position].PublicationDate;
    (<HTMLInputElement>document.getElementById("available")).value = bookData[position].Avability;
    (<HTMLInputElement>document.getElementById("edition")).value = bookData[position].Edition;
}
function doNext() : void{
    document.getElementById("alert").innerHTML ="";
    if (position == bookData.length-1)
    {// check if we are at the begining of the array.
        document.getElementById("alert").innerHTML ="There is no next book.";
        return;

    }
    position++;
    (<HTMLInputElement>document.getElementById("isbn")).value = "" + bookData[position].Isbn;
    (<HTMLInputElement>document.getElementById("title")).value = bookData[position].Title;
    (<HTMLInputElement>document.getElementById("author")).value = bookData[position].Author;
    (<HTMLInputElement>document.getElementById("publisher")).value = bookData[position].Publisher;
    (<HTMLInputElement>document.getElementById("publicationDate")).value = bookData[position].PublicationDate;
    (<HTMLInputElement>document.getElementById("available")).value = bookData[position].Avability;
    (<HTMLInputElement>document.getElementById("edition")).value = bookData[position].Edition;
}
function doDelete() : void{
   let nis = confirm("Are you sure you want to do that?");
    if (nis == true) {
        if (position < 0) {
            document.getElementById("alert").innerHTML = "There is no data to delete";
            return;
        }
      }
      

    // delete the array element at the current position
    bookData.splice(position, 1);
    if (bookData.length == position) position--;
    (<HTMLInputElement>document.getElementById("isbn")).value = "" + bookData[position].Isbn;
    (<HTMLInputElement>document.getElementById("title")).value = bookData[position].Title;
    (<HTMLInputElement>document.getElementById("author")).value = bookData[position].Author;
    (<HTMLInputElement>document.getElementById("publisher")).value = bookData[position].Publisher;
    (<HTMLInputElement>document.getElementById("publicationDate")).value = bookData[position].PublicationDate;
    (<HTMLInputElement>document.getElementById("available")).value = bookData[position].Avability;
    (<HTMLInputElement>document.getElementById("edition")).value = bookData[position].Edition;
}

function doFavourite() : void{
   let nis = confirm("Do you want to see fav book");
    if (nis == true) {
        if (position == 0) {
   document.getElementById("alert").innerHTML ="The following are the favourite books.";
       return;
        }
      }
       bookData.splice(position, 1);
       (<HTMLInputElement>document.getElementById("available")).value = bookData[position].Avability;
}
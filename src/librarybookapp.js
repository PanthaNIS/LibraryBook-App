;
var bookData;
bookData = []; // initialise the empty array
var position = -1;
//Initialise add function
function doAdd() {
    // get the input isbn from the form
    document.getElementById("alert").innerHTML = "";
    var isbnString;
    isbnString = document.getElementById("isbn").value;
    var id = parseInt(isbnString); // converting to number
    if (isNaN(id)) {
        document.getElementById("alert").innerHTML = "ISBN must be entered and must be a number.";
        return;
    }
    // get the input title from the form
    var BTitle = document.getElementById("title").value;
    if (BTitle == "") {
        document.getElementById("alert").innerHTML = "Book title must be entered ";
        return;
    }
    // get the input author name from the form
    var BkAuthor = document.getElementById("author").value;
    if (BkAuthor == "") {
        document.getElementById("alert").innerHTML = "Author name must be entered ";
        return;
    }
    // get the input publisher name from the form
    var BkPublisher = document.getElementById("publisher").value;
    if (BkPublisher == "") {
        document.getElementById("alert").innerHTML = "Publisher name must be entered ";
        return;
    }
    // get the input publication date from the form  
    var BkPublicationDate = document.getElementById("publicationDate").value;
    if (BkPublicationDate == "") {
        document.getElementById("alert").innerHTML = "Publication date must be entered ";
        return;
    }
    // get the input pages from the form
    var pageString;
    pageString = document.getElementById("page").value;
    var pgId = parseInt(pageString); // converting to number
    if (isNaN(pgId)) {
        document.getElementById("alert").innerHTML = "Page must be a number ";
        return;
    }
    // get the input availability from the form	
    var BkAvailability = document.getElementById("available").value;
    if (BkAvailability == "") {
        document.getElementById("alert").innerHTML = "Availability Must be entered ";
        return;
    }
    // get the input edition from the form
    var BkEdition = document.getElementById("edition").value;
    if (BkEdition == "") {
        document.getElementById("alert").innerHTML = "Edition Must be entered ";
        return;
    }
    //// Adding to the database
    bookData[bookData.length] = { Isbn: id, Title: BTitle, Author: BkAuthor, Publisher: BkPublisher, PublicationDate: BkPublicationDate, Pages: pgId, Availability: BkAvailability, Edition: BkEdition };
    document.getElementById("display").innerHTML = JSON.stringify(bookData, null, 4);
    position++; // increment the position
    console.log(bookData);
}
// // calling the update function to edit the last entered data.
// function doUpdate() : void{
// }   
// calling the doPrev function to show the all the input value of the previous book.
function doPrev() {
    document.getElementById("alert").innerHTML = "";
    if (position <= 0) { // check if we are at the begining of the array.
        document.getElementById("alert").innerHTML = "There is no previous book.";
        return;
    }
    position--;
    document.getElementById("isbn").value = "" + bookData[position].Isbn;
    document.getElementById("title").value = bookData[position].Title;
    document.getElementById("author").value = bookData[position].Author;
    document.getElementById("publisher").value = bookData[position].Publisher;
    document.getElementById("publicationDate").value = bookData[position].PublicationDate;
    document.getElementById("available").value = bookData[position].Availability;
    document.getElementById("edition").value = bookData[position].Edition;
}
function doNext() {
    document.getElementById("alert").innerHTML = "";
    if (position == bookData.length - 1) { // check if we are at the begining of the array.
        document.getElementById("alert").innerHTML = "There is no next book.";
        return;
    }
    position++;
    document.getElementById("isbn").value = "" + bookData[position].Isbn;
    document.getElementById("title").value = bookData[position].Title;
    document.getElementById("author").value = bookData[position].Author;
    document.getElementById("publisher").value = bookData[position].Publisher;
    document.getElementById("publicationDate").value = bookData[position].PublicationDate;
    document.getElementById("available").value = bookData[position].Availability;
    document.getElementById("edition").value = bookData[position].Edition;
}
function doDelete() {
    var nis = confirm("Are you sure you want to do that?");
    if (nis == true) {
        if (position < 0) {
            document.getElementById("alert").innerHTML = "There is no data to delete";
            return;
        }
    }
    // delete the array element at the current position
    bookData.splice(position, 1);
    if (bookData.length == position)
        position--;
    document.getElementById("isbn").value = "" + bookData[position].Isbn;
    document.getElementById("title").value = bookData[position].Title;
    document.getElementById("author").value = bookData[position].Author;
    document.getElementById("publisher").value = bookData[position].Publisher;
    document.getElementById("publicationDate").value = bookData[position].PublicationDate;
    document.getElementById("available").value = bookData[position].Availability;
    document.getElementById("edition").value = bookData[position].Edition;
}
// 
function doFavourite() {
    var nis = confirm("Do you want to see fav book");
    if (nis == true) {
        if (position == 0) {
            document.getElementById("alert").innerHTML = "The following are the favourite books.";
            return;
        }
    }
    bookData.splice(position, 1);
    document.getElementById("available").value = bookData[position].Availability;
}

let myLibrary = [];

function Book (title, author, pages=0, read=false) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function (){return `${title.toUpperCase()}, ${pages} pages, ${read}`}
}

let book1 = new Book('The Hobbit', 'J.R.R Tolkien', 456, 'no');
let book2 = new Book('The Lord of The Rings', 'J.R.R Tolkien', 1000, 'no');
let book3 = new Book('The Code Book', 'Simon Singh', 400, 'yes');

myLibrary.push(book1, book2, book3);

const main = document.querySelector(".main");

myLibrary.forEach(book => {
    addNewBookToPage(book);
});

function addNewBookToPage(book) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('card');
    newDiv.dataset.index = myLibrary.indexOf(book);
    const aWrap = document.createElement('a');
    aWrap.href = '#';
    aWrap.classList.add('close-button');
    aWrap.dataset.index = myLibrary.indexOf(book);
    const close = document.createElement('img');
    close.src = 'close.svg';
    const title = document.createElement('h4');
    title.textContent = book.title;
    const author = document.createElement('p');
    author.textContent = book.author;
    const pages = document.createElement('p');
    pages.textContent = `Pages: ${book.pages}`;
    const read = document.createElement('p');
    read.textContent = `Have you read it: ${book.read}`
    const toggleRead = document.createElement('button');
    if (book.read === 'yes') {
        toggleRead.textContent = 'Unread';
    } else {
        toggleRead.textContent = 'Read';
    }
    aWrap.appendChild(close);
    newDiv.appendChild(aWrap);
    newDiv.appendChild(title);
    newDiv.appendChild(author);
    newDiv.appendChild(pages);
    newDiv.appendChild(read);
    newDiv.appendChild(toggleRead);
    main.appendChild(newDiv);
    aWrap.addEventListener('click', () => {
        newDiv.remove();
        myLibrary.splice(+aWrap.dataset.index, 1);
    });
    toggleRead.addEventListener('click', () => {
        if (book.read === 'yes') {
            book.read = 'no';
            toggleRead.textContent = 'Read';
            read.textContent = `Have you read it: ${book.read}`
        } else {
            book.read = 'yes';
            toggleRead.textContent = 'Unread';
            read.textContent = `Have you read it: ${book.read}`
        }
    })
}


const addButton = document.querySelector('.button-46');

const form = document.querySelector('.addBook');

addButton.addEventListener('click', () => {
    form.style.display = 'flex';
});

function addBookToLibrary(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

const submitFormBtn = document.querySelector('.button-4');

let closeBtn = document.querySelectorAll('.close-button');


form.addEventListener('submit', (e) => {
    e.preventDefault()
    const title = form.elements['bookTitle'].value.trim();
    const author = form.elements['bookAuthor'].value.trim();
    const pages = +form.elements['bookPages'].value.trim();
    const read = form.elements['bookRead'].value.trim();
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    addNewBookToPage(newBook);
    form.style.display = 'none';
    console.log(myLibrary)
    form.reset();
    
});



// closeBtn.forEach(button => {
//     button.addEventListener('click', () => {
//         console.log(closeBtn)
//         const index = button.dataset.index;
//         const divToRemove = document.querySelector(`[data-index='${index}']`);
//         divToRemove.remove();
//         myLibrary.splice(+index, 1);
//         console.log(myLibrary)
//     })
// })








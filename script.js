'use script';

document.addEventListener("DOMContentLoaded", () => {

    let bookContainer = document.querySelector('.books'),
        allBooks = document.querySelectorAll('.book');


    bookContainer.insertBefore(allBooks[1], allBooks[0]);
    bookContainer.insertBefore(allBooks[4], allBooks[2]);
    bookContainer.insertBefore(allBooks[3], allBooks[2]);
    bookContainer.insertBefore(allBooks[2], null);


    document.body.style.background = 'url(image/you-dont-know-js.jpg)';


    let title = document.querySelectorAll('.book h2 a')[2];
    title.textContent = 'Книга 3. this и Прототипы Объектов';

    let advertisement = document.querySelector('.adv');
    advertisement.remove();


    let secondBookList = document.querySelectorAll('ul')[1],
        chaptersOfSecondBook = secondBookList.querySelectorAll('li');

    secondBookList.insertBefore(chaptersOfSecondBook[7], chaptersOfSecondBook[2]);
    secondBookList.insertBefore(chaptersOfSecondBook[9], chaptersOfSecondBook[2]);
    secondBookList.insertBefore(chaptersOfSecondBook[10], chaptersOfSecondBook[3]);
    secondBookList.insertBefore(chaptersOfSecondBook[6], chaptersOfSecondBook[4]);
    secondBookList.insertBefore(chaptersOfSecondBook[8], chaptersOfSecondBook[4]);


    let fifthBookList = document.querySelectorAll('ul')[4],
        chaptersOfFifthBook = fifthBookList.querySelectorAll('li');

    fifthBookList.insertBefore(chaptersOfFifthBook[5], chaptersOfFifthBook[2]);
    fifthBookList.insertBefore(chaptersOfFifthBook[8], chaptersOfFifthBook[2]);
    fifthBookList.insertBefore(chaptersOfFifthBook[10], chaptersOfFifthBook[2]);
    fifthBookList.insertBefore(chaptersOfFifthBook[9], chaptersOfFifthBook[2]);
    fifthBookList.insertBefore(chaptersOfFifthBook[3], chaptersOfFifthBook[2]);
    fifthBookList.insertBefore(chaptersOfFifthBook[4], chaptersOfFifthBook[2]);


    let sixthBook = document.querySelectorAll('ul')[5],
        sixthBookChapters = sixthBook.querySelectorAll('li'),
        newChapter = document.createElement('li');

    newChapter.textContent = 'Глава 8: За пределами ES6';

    sixthBook.appendChild(newChapter);

    sixthBook.insertBefore(sixthBookChapters[9], null);


});
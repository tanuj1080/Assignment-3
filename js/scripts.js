// Sample book data (replace with your actual data)
const books = [
    { id: 1, title: "Book 1", author: "Author 1", rating: 4.5, reviews: ["Review 1", "Review 2"] },
    { id: 2, title: "Book 2", author: "Author 2", rating: 3.8, reviews: ["Review 1"] },
    { id: 3, title: "Book 3", author: "Author 3", rating: 4.0, reviews: ["Review 1", "Review 2", "Review 3"] }
];

// Function to display list of books
function displayBooks() {
    const bookList = document.getElementById("book-list");
    bookList.innerHTML = "";
    
    books.forEach(book => {
        const li = document.createElement("li");
        li.innerHTML = `<a href="book.html?id=${book.id}">${book.title} by ${book.author}</a>`;
        bookList.appendChild(li);
    });
}

// Function to display book details and reviews
function displayBookDetails(bookId) {
    const book = books.find(book => book.id === parseInt(bookId));
    if (!book) {
        console.error("Book not found");
        return;
    }

    const bookDetails = document.getElementById("book-details");
    bookDetails.innerHTML = `
        <h1>${book.title}</h1>
        <p>Author: ${book.author}</p>
        <p>Rating: ${book.rating}</p>
        <div class="reviews">
            <h2>Reviews:</h2>
            ${book.reviews.map(review => `<div class="review">${review}</div>`).join("")}
        </div>
    `;
}

// Check if on book details page
if (window.location.pathname.includes("book.html")) {
    const urlParams = new URLSearchParams(window.location.search);
    const bookId = urlParams.get("id");
    if (bookId) {
        displayBookDetails(bookId);
    }
} else {
    displayBooks();
}

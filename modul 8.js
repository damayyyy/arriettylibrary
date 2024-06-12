let libraryData = [
    { title: "Lord of the Rings", author: "J.R.R. Tolkien", year: 1954, isbn: "978-0261102385" },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, isbn: "978-0061120084" },
    { title: "1984", author: "George Orwell", year: 1949, isbn: "978-0451524935" },
    { title: "Pride and Prejudice", author: "Jane Austen", year: 1813, isbn: "978-0141439518" }
];


function displayLibrary() {
    const tbody = document.getElementById('libraryTable').getElementsByTagName('tbody')[0];
    tbody.innerHTML = "";
    libraryData.forEach((book, index) => {
        const row = tbody.insertRow();
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.year}</td>
            <td>${book.isbn}</td>
            <td>
                <button onclick="editJournal(${index})">Edit</button>
                <button onclick="deleteJournal(${index})">Hapus</button>
            </td>
        `;
    });
}

function addOrUpdateJournal() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const year = document.getElementById('year').value;
    const isbn = document.getElementById('isbn').value;
    const editIndex = document.getElementById('editIndex').value;

    const journal = { title, author, year, isbn };

    if (editIndex === "") {
        libraryData.push(journal);
    } else {
        libraryData[editIndex] = journal;
        document.getElementById('editIndex').value = "";
    }

    document.getElementById('libraryForm').reset();
    displayLibrary();
}

function editJournal(index) {
    const journal = libraryData[index];
    document.getElementById('title').value = journal.title;
    document.getElementById('author').value = journal.author;
    document.getElementById('year').value = journal.year;
    document.getElementById('isbn').value = journal.isbn;
    document.getElementById('editIndex').value = index;
}

function deleteJournal(index) {
    libraryData.splice(index, 1);
    displayLibrary();
}

displayLibrary();

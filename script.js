class Book {
  constructor(title, author, description) {
      this.title = title;
      this.author = author;
      this.description = description;
  }

  getInfo() {
      return `${this.title} - ${this.author}: ${this.description}`;
  }
}

function addBook() {
  const titleInput = document.getElementById('titleInput');
  const authorInput = document.getElementById('authorInput');
  const descriptionInput = document.getElementById('descriptionInput');

  const title = titleInput.value;
  const author = authorInput.value;
  const description = descriptionInput.value;

  if (title.trim() !== '' && author.trim() !== '') {
      const bookList = document.getElementById('bookList');
      
      const book = new Book(title, author, description);

      const listItem = document.createElement('li');
      listItem.textContent = book.getInfo();
      bookList.appendChild(listItem);

      titleInput.value = '';
      authorInput.value = '';
      descriptionInput.value = '';
  } else {
      alert('Пожалуйста, введите название книги и автора.');
  }
}


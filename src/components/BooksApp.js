import React, { Component } from 'react';
import AppBarMu from '../shared/AppBarMu';
import BookShelf from  './BookShelf';
import paper from '../paper.png';

class BooksApp extends Component {

  constructor(props) {
      super(props);
      this.state = {
          myBooks: [],
      };
      this.searchByTitle = this.searchByTitle.bind(this);
      this.searchByAuthor = this.searchByAuthor.bind(this);
      this.saveBookLocal = this.saveBookLocal.bind(this);
      this.updateBookLocal = this.updateBookLocal.bind(this);
      this.deleteLocalBook = this.deleteLocalBook.bind(this);
      this.handleClickBook = this.handleClickBook.bind(this);
  }

  searchByAuthor(author) {
    return this.state.myBooks.filter(book => book.author.includes(author));
  }

  searchByTitle(title) {
    return this.state.myBooks.find(book => book.title === title) || {title: 'no titles could be found'};
  }
  saveBookLocal(book){
    const newMyBooks = [book].concat(this.state.myBooks);
    this.setState({ myBooks: newMyBooks });
    console.log('the book was added');
  }
  updateBookLocal(id, book) {
    const filterChange = this.state.myBooks.filter(book => book.id  !== id);
    this.setState({myBooks: [book].concat(filterChange)});
    console.log('the book was modified');
  }
  deleteLocalBook(id) {
    this.setState({myBooks : this.state.myBooks.filter(book => book.id !== id)});
    console.log('the book was deleted');
  }
  handleClickBook() {
    alert('Book');
  }


/*
  postBook(book) {
    fetch('https://5eb06996e6828200164a6a49.mockapi.io/api/books/books', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  updateBook(id, book) {
    fetch('https://5eb06996e6828200164a6a49.mockapi.io/api/books/books/'+id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    })
    .then(response => response.json())
    .then(data => {
      const filterChange = this.state.myBooks.filter(book => book.id  !== id);
      this.setState({myBooks: [data].concat(filterChange)});
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });  
  }

  deleteBook(id) {
    fetch('https://5eb06996e6828200164a6a49.mockapi.io/api/books/books/'+id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => response.json())
    .then(data => {
      this.setState({myBooks : this.state.myBooks.filter(book => book.id !== id)});
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });  
  }
  
  componentWillMount() {
    /* fetch('https://5eb06996e6828200164a6a49.mockapi.io/api/books/books')
      .then(response => response.json())
      .then(data => {
        this.setState({myBooks: data})
        console.log(JSON.stringify(this.state.myBooks));
      }); 
 
  componentDidMount() {

  }
  */
  render() {
    return(
      <div className="app-container" style={{width:'100%', height:'100%', position:'relative' }}> 
        <div className="app" style={{backgroundImage:`url(${paper})`, width: '49%', height:'80%', margin:'auto', marginTop:'70px'}}>
          <AppBarMu addBook={this.saveBookLocal} editBook={this.updateBookLocal}/>  
          <BookShelf books={this.state.myBooks} editBook={this.saveBookLocal} onClick={this.handleClickBook}/>  
        </div>
      </div>
    );
  }
}

export default BooksApp;

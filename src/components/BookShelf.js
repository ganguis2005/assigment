import React, { Component } from 'react'
import Book from './Book';

export default class BookShelf extends Component {
    render() {
        return (
            <div 
            className="book-box"  
            style={{
            height:'90%', 
            margin:'auto', 
            marginTop:'50px',
            display: 'flex',
            alignItems: 'flex-start',
            flexWrap: 'wrap',

            }}
          > 
            {this.props.books.map((book) => {
                return (
                    <Book 
                        onClick={this.props.o}
                        id={book.id} 
                        title={book.title}
                        image={book.image}
                        description={book.description}
                        author={book.author}
                    />
                );        

            })} 
                 
          
          </div>
        )
    }
}
BookShelf.defaultProps = {
    books:[],
};
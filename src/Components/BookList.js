import React, { Component } from 'react';
import Book from './Book';
import sampleBooks from "../sample-books";
import '../CSS/BookList.css';

class BookList extends Component {
    constructor(props) {
        super(props);

        // this.loadSamples = this.loadSamples.bind(this);

        this.state = {
            books: sampleBooks
        }
    }

    // loadSamples() {
    //     this.setState({
    //         books: sampleBooks
    //     })
    // }
    render() {
        return (
            <div class="book-list">
                {/* <button onClick={this.loadSamples}>Load Sample Books</button> */}
                {
                    Object
                    .keys(this.state.books)
                    .map(book => 
                        <Book key={book} details={this.state.books[book]} />
                    )
                }
            </div>
        );
    }
}

export default BookList;
import React, { Component } from 'react';
import '../CSS/Book.css';

class Book extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        const { details } = this.props;
        return (
            <div class="book-list__book">
                <a href="#">
                    <img class="book-list__book--cover" src={`./img/covers/${details.slug}.jpg`} alt={details.title} />
                    <div class="book-list__book--details">
                        <p class="book-list__book--title">{details.title}</p>
                        <p class="book-list__book--author">{details.author}</p>
                    </div>
                </a>
            </div>
         )
    }
}

export default Book;
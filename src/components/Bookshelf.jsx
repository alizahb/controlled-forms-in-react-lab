import { useState } from 'react';

function Bookshelf() {

const [books, setBooks] = useState([
    { title: 'Fourth Wing', author: 'Rebecca Yarros' },
    { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
  ]);

const [newBook, setNewBook] = useState({
    title: '',
    author: ''
}); 

const handleInputChange = (e) => {
    const { name, value } = e.target; 
     
    setNewBook(previousBook => ({
        ...previousBook, 
        [name]:value
    }));
}; 

const handleSubmit = (e) => {
e.preventDefault();  
setBooks(previousBooks => [
    ...previousBooks, 
    newBook 
]); 

setNewBook({title: '', author: ''});
};

return (
    <div className="bookshelfDiv">
         <div className="formDiv">
            <h3>Add a Book</h3> 
            <form onSubmit={handleSubmit}>
                <input 
                type= "text"
                name="title" 
                placeholder="Title"
                value={newBook.title}
                onChange={handleInputChange} 
                />
                <input
                type="text"
                name="author"
                placeholder="Author"
                value= {newBook.author}
                onChange={handleInputChange}
                />
            <button type="submit">Add Book</button>
            </form>
      </div>
    <div className="bookCardsDiv">
        {books.length > 0 ? (
            books.map((book, index) => (
            <div key= {index}>
                <h4> {book.title}</h4>
                <p> {book.author}</p>
                </div>
        ))
    ): (
        <p> No books added yet </p>
    )}
    </div>
    </div>
    );
}

export default Bookshelf; 
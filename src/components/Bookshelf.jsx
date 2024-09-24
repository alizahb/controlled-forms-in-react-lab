import { useState } from 'react';

function Bookshelf() {
//state for books and newBook
const [books, setBooks] = useState([
    { title: 'Fourth Wing', author: 'Rebecca Yarros' },
    { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
  ]);

const [newBook, setNewBook] = useState({
    title: '',
    author: ''
}); 

//handle input changes and update state 
const handleInputChange = (e) => {
    const { name, value } = e.target; 
     // Create a new version of the newBook object while maintaining other fields
    setNewBook(previousBook => ({
        ...previousBook, //copy existing values from the previous state
        [name]:value //update the field corresponding to the name attriubte of the input 
    }));
}; 

const handleSubmit = (e) => {
e.preventDefault(); //stop default form submission action 
//add new books to books aray 
setBooks(previousBooks => [
    ...previousBooks, //keep previous books 
    newBook //add the new book object 
]); 
//reset form 
setNewBook({title: '', author: ''});
};

return (
    <div className="bookshelfDiv">
         <div className="formDiv">
            <h3>Add a Book</h3> 
            <form onSubmit={handleSubmit}>
                <input 
                type= "text"
                name="title" //add name attribute
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
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/LibrarySystemModelMongoose', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB successfully!'))
    .catch((error) => console.error('Error connecting to MongoDB', error));

    const bookSchema = new mongoose.Schema({
        title: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        publishedYear: {
            type: Number,
            required: true
        }
    });
    

    const Book = mongoose.model('Book', bookSchema);

    
    const newBook = new Book({
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        publishedYear: 1925
    });
    newBook.save()
        .then((book) => {
            console.log('Book saved:', book);
        })
        .catch((error) => {
            console.error('Error saving book:', error);
        });
    

    //     Book.findOne({ title: 'The Great Gatsby' })
    //     .then((book) => {
    //         if (book) {
    //             console.log('Book found:', book);
    //         } else {
    //             console.log('No book found with the given title.');
    //         }
    //     })
    //     .catch((error) => {
    //         console.error('Error finding book:', error);
    //     });
    
    //     Book.updateOne({ title: 'The Great Gatsby' }, { $set: { publishedYear: 1926 } })
    // .then((result) => {
    //     console.log('Book updated:', result);
    // })
    // .catch((error) => {
    //     console.error('Error updating book:', error);
    // });
    // Book.deleteOne({ title: 'The Great Gatsby' })
    // .then((result) => {
    //     console.log('Book deleted:', result);
    // })
    // .catch((error) => {
    //     console.error('Error deleting book:', error);
    // });

// insert many 
const booksToInsert = [
    { title: 'NEW THINKING', author: 'Dagogo Altraide', publishedYear: 2017 },
    { title: 'DEEP WORK', author: 'Cal Newport', publishedYear: 2019 },
    { title: 'THE ALMANACK OF NAVAL RAVIKANT', author: 'Naval Ravikant', publishedYear: 2020 }
];

Book.insertMany(booksToInsert)
    .then((books) => {
        console.log('Books inserted:', books);
    })
    .catch((error) => {
        console.error('Error inserting books:', error);
    });



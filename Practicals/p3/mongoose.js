const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mydb', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB successfully!'))
    .catch((error) => console.error('Error connecting to MongoDB', error));

const krischema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        default: 0
      },
      deregistered: {
        type: Date,
        default: Date.now
      }
    
});

const obj = mongoose.model('kri', krischema);

// Define an array containing the documents to insert
// const newUsers = [
//     { name: 'Harsh', email: 'h@gmail.com', age: 20 },
//     { name: 'Tanish', email: 'Tan@gmail.com', age: 21 }
// ];

// // Insert many documents into the database
// obj.insertMany(newUsers)
//     .then((docs) => {
//         console.log('Documents inserted:', docs);
//     })
//     .catch((err) => {
//         console.error('Error inserting documents:', err);
//     });


// Find one document by name
// obj.findOne({ name: 'Vraj Patel' })
//     .then((doc) => {
//         if (doc) {
//             console.log('Document found:', doc);
//         } else {
//             console.log('No document found with the given name.');
//         }
//     })
//     .catch((err) => {
//         console.error('Error finding document:', err);
//     });

// UPDATE ONE
// obj.updateOne({name:"Vraj Patel"},{$set:{name: "Vraj Chetankumar Patel"}})
//   .then((docs)=>{
//     if(docs) {
//        console.log(docs);
//     } else {
//         console.log("no such user exist");
//     }
//  }).catch((err)=>{
//     console.log(err);
// })

// UPDATE MANY
// obj.updateMany({age: 20},{$set:{ age: 21}})
//   .then((docs)=>{
//     if(docs) {
//         console.log(docs);
//     } else {
//         console.log("no such user exist");
//     }
//  }).catch((err)=>{
//     console.log(err);
// })

//deleteone

// obj.deleteOne({name: "Harsh"})
// .then((docs)=>{
//     if(docs) {
//         console.log(docs);
//     } else {
//         console.log("no such user exist");
//     }
//  }).catch((err)=>{
//     console.log(err);
// })

// DELETE MANY
obj.deleteMany({name: "Tanish"})
.then((docs)=>{
    if(docs) {
        console.log(docs);
    } else {
        console.log("no such user exist");
    }
 }).catch((err)=>{
    console.log(err);
})
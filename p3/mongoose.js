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

const newobj = new obj({
    name: 'Vraj Patel',
    email: 'vraj.pce21@sot.pdpu.ac.in',
    age: 20
})

// newobj.save()
//   .then(kri => console.log('User created:', kri))
//   .catch(err => console.error(err));


// FIND 

// obj.find({})
//     .then((doc) => {
//         console.log(doc);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

//query with condition to find with name 

// obj.find({name: 'Vraj Patel'})
//     .then((doc) => {
//         console.log(doc);
//     })
//     .catch((err) => {
//         console.log(err);
//     });


// update

// UPDATE ONE
// obj.updateOne({name:"Harsh Shah"},{$set:{name: "Harsh"}})
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


// INSERt MANY
// const Newuser = new obj({name: 'Harsh',
// email: 'h@gmail.com',
// age: 20});
// const Newuser1 = new obj({name: 'Tanish',
// email: 'Tan@gmail.com',
// age: 21});

// // it srore directly to collection
// obj.collection.insertMany([Newuser,Newuser1])
//   .then((data)=>{
//   console.log (data);
//   }).catch((err)=>{
//     console.log(err);}
//     );

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
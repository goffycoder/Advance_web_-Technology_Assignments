const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017/mydb';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToMongoDB() {
    try {
        await client.connect();
        console.log('Connected');
    } catch (error) {
        console.error('Error connecting to MongoDB');;
    }
}

connectToMongoDB();

async function inserto(client,newdoc){{
    const result = await
    client.db('mydb').collection('awt').insertOne(newdoc);
    console.log(`New listing created with the following id: 
    ${result.insertedId}`);

    }
}

data = {name: "Vraj Patel", age: 20, city: "New York"};
inserto(client,data);
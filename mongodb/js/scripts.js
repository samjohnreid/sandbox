import mongodb from '../mongodb';
const { MongoClient } = mongodb;
 
const url = "mongodb+srv://sam-john-read-270678:Sammers_220182@cluster0.2u7b1.mongodb.net/sams_database_02?retryWrites=true&w=majority&useUnifiedTopology=true";
const client = new MongoClient(url);
 
 // The database to use
 const dbName = "sams_database_02";
                      
 async function run() {
    try {
         await client.connect();
         console.log("Connected correctly to server");
         const db = client.db(dbName);
         // Use the collection "people"
         const col = db.collection("test_sandbox");
         // Construct a document                                                                                                                                                              
         let test_document = [
          {
            id: 57,
            title: `Midnight's Children`,
            year: 1981,
            author: `Salman Rushdie`
          }
         ]
         // Insert a single document, wait for promise so we can read it back
         const p = await col.insertMany(test_document);
         // Find one document
         const myDoc = await col.find({});
         // Print to the console
         console.log(myDoc);
        } catch (err) {
         console.log(err.stack);
     }
 
     finally {
        await client.close();
    }
}
run().catch(console.dir);
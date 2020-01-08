const {MongoClient,ObjectID}=require("mongodb")

const connectionURL="mongodb://127.0.0.1:27017"
const databaseName="task-manager"


MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client)=>{
    if(error){
        return console.log("There was error establishing a connection with Mongodb!")
    }

    const db=client.db(databaseName)
    db.collection("tasks").deleteOne({
        description:"Finish Homework"
    })
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.log(error)
    })
})
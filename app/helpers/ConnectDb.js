import mongoose from 'mongoose'


const ConnectDb = () => {
    if(mongoose.connections[0].readyState){
        return console.log("You already connected Mongo Db")
    }

    const {MONGO_URI} = process.env;

    mongoose.connect(`${MONGO_URI}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    })
    .then(() => {
        console.log(`MongoDb Connected`)
    })
    .catch((err) => {
        console.log(err)
    })
}

export default ConnectDb;
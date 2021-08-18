const mongoose = require("mongoose");

const dbConnection = async () => {

    try { await mongoose.connect(process.env.DB_CONNECTION,{
        useNewUrlParser: true,
        useFindAndModify:false,
        useCreateIndex:true,
        useUnifiedTopology:true,
    })
        console.log("Connected with mongo databases: ON");
    } catch (error) {
        console.log("Mongo connection error");
        throw new Error("Mongo connection error",error);
    }
    

}

    module.exports = {dbConnection};
const mongoose = require("mongoose");

const dbConnect = async () => {
    const DB_URI = process.env.DB_URI;
    try{
        await mongoose.connect(DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('**Conexion corecta')
    } catch(error){
        console.log("Conexion incorrecta")
    }
};

module.exports = dbConnect;
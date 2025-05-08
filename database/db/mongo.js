const mongoose = require('mongoose');

const clientOptions ={
    dbName: 'Portfolio'
};

exports.initDbConnection = async () =>{
    try {
        await mongoose.connect(process.env.URL_MONGO, clientOptions);
        console.log("Connecté à MongoDB");
    } catch (error) {
        console.log("Erreur connexion: ", error);
        throw error;
    }
};